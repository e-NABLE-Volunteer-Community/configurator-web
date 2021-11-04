import {
  MeasurementSet,
  MeasurementSetId,
  MeasurementsType,
} from "../configurator-types";
import * as R from "ramda";
import faker from "faker";
import { isLoading, Loading, StateSlice } from "./utils";

//<editor-fold desc="Mock Data">
const sample = <T>(ts: T[]): T => ts[Math.floor(Math.random() * ts.length)];
const makeMockMeasurements = (n: number) =>
  R.times((i) => {
    const type = sample(Object.values(MeasurementsType));
    return {
      id: i.toString(),
      name: `Measurements ${i}`,
      type,
      createdAt: faker.date.recent(),
      modifiedAt: faker.date.recent(),
      data:
        type === MeasurementsType.hand
          ? {
              wristCircumference: `${Math.floor(Math.random() * 15)} cm`,
            }
          : {},
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
  addMeasurementSet: (measurements: MeasurementSet) => void;
  removeMeasurementSet: (id: MeasurementSetId) => void;
};
export const createMeasurementsSlice: StateSlice<MeasurementsSlice> = (set) => {
  const measurementSets: MeasurementSet[] = makeMockMeasurements(10);

  const addMeasurementSet = (measurements: MeasurementSet) =>
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

  return { measurementSets, addMeasurementSet, removeMeasurementSet };
};
