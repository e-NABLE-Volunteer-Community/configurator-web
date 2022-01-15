import {
  MeasurementSet,
  MeasurementSetId,
  MeasurementSetType,
} from "../configurator-types";
import * as R from "ramda";
import faker from "faker";
import { isLoading, Loading, StateSlice } from "./utils";

//<editor-fold desc="Mock Data">
const sample = <T>(ts: T[]): T => ts[Math.floor(Math.random() * ts.length)];
const makeMockMeasurements = (n: number) =>
  R.times((i) => {
    const type = sample(Object.values(MeasurementSetType));
    return {
      id: i.toString(),
      name: `Measurements ${i}`,
      type,
      createdAt: faker.date.recent(),
      modifiedAt: faker.date.recent(),
      data: [],
      associatedDevices: [],
    };
  }, n);
//</editor-fold>

const sortMeasurementsByCreatedAtMostRecentFirst = (
  a: MeasurementSet,
  b: MeasurementSet
): 1 | 0 | -1 => {
  if (a.createdAt > b.createdAt) return 1;
  if (a.createdAt < b.createdAt) return -1;
  return 0;
};

export type MeasurementsSlice = {
  measurementSets: MeasurementSet[] | Loading;
  submitNewMeasurementSet: (measurements: MeasurementSet) => void;
  removeMeasurementSet: (id: MeasurementSetId) => void;
  updateNewMeasurementSet: (newValue?: Partial<MeasurementSet>) => void;
  newMeasurementSet?: Partial<MeasurementSet>;
};
export const createMeasurementsSlice: StateSlice<MeasurementsSlice> = (set) => {
  const measurementSets: MeasurementSet[] = makeMockMeasurements(10);

  const submitNewMeasurementSet = (measurements: MeasurementSet) =>
    set(({ measurementSets }) => {
      if (isLoading(measurementSets))
        throw new Error("Cannot add while loading");
      const newSet = R.append(measurements, measurementSets);
      newSet.sort(sortMeasurementsByCreatedAtMostRecentFirst);
      return { measurementSets: newSet };
    });

  const removeMeasurementSet = (id: MeasurementSetId) =>
    set(({ measurementSets }) => {
      if (isLoading(measurementSets))
        throw new Error("Cannot remove while loading");
      const filteredSets = measurementSets.filter((item) => item.id !== id);
      return { measurementSets: filteredSets };
    });

  const updateNewMeasurementSet = (
    newValue?: Partial<MeasurementSet>
  ): void => {
    set({ newMeasurementSet: newValue });
  };

  return {
    measurementSets,
    submitNewMeasurementSet,
    removeMeasurementSet,

    updateNewMeasurementSet,
  };
};
