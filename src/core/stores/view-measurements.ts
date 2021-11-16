import {
  DEFAULT_MEASUREMENTS,
  ViewMeasurement,
} from "../view-measurement-types";
import { Loading, StateSlice } from "./utils";
import { StateCreator } from "zustand";

const mockViewMeasurements = (): ViewMeasurement[] => DEFAULT_MEASUREMENTS;

export type ViewMeasurementStore = {
  setViewMeasurements: (viewMeasurements: ViewMeasurement[]) => void;
  viewMeasurements: ViewMeasurement[];
};

export const createViewMeasurementsSlice: StateCreator<ViewMeasurementStore> = (
  set
) => {
  const setViewMeasurements = (viewMeasurements: ViewMeasurement[]) => {
    set({ viewMeasurements });
  };
  return {
    setViewMeasurements,
    viewMeasurements: mockViewMeasurements(),
  };
};
