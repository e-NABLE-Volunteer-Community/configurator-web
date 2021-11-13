import {
  DEFAULT_MEASUREMENTS,
  ViewMeasurement,
} from "../view-measurement-types";
import { Loading, StateSlice } from "./utils";

const mockViewMeasurements = (): ViewMeasurement[] => DEFAULT_MEASUREMENTS;

export type ViewMeasurementStore = {
  setViewMeasurements: (viewMeasurements: ViewMeasurement[]) => void;
  viewMeasurements: ViewMeasurement[] | Loading;
};

export const createViewMeasurementsSlice: StateSlice<ViewMeasurementStore> = (
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
