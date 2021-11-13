import {
  DEFAULT_MEASUREMENTS,
  ViewMeasurement,
} from "../view-measurement-types";
import { Loading, StateSlice } from "./utils";

const mockViewMeasurements = (): ViewMeasurement[] => DEFAULT_MEASUREMENTS;

export type ViewMeasurementStore = {
  viewMeasurements: ViewMeasurement[] | Loading;
};

export const createViewMeasurementsSlice: StateSlice<ViewMeasurementStore> = () => {
  return {
    viewMeasurements: mockViewMeasurements(),
  };
};
