import { createMeasurementsSlice, MeasurementsSlice } from "./measurements";
import create from "zustand";
import { createDevicesSlice, DevicesStore } from "./devices";
import * as R from "ramda";
import { RootState } from "./utils";
import {
  createViewMeasurementsSlice,
  ViewMeasurementStore,
} from "./view-measurements";

export const useApp = create<RootState>((set, get, api) => ({
  ...createMeasurementsSlice(set),
  ...createDevicesSlice(set),
  ...createViewMeasurementsSlice(set),
}));
export const useDevices = (): DevicesStore["devices"] =>
  useApp(R.prop("devices"));

// Returns null while still loading
// This won't happen until Measurements are stored remotely, but the app should be
// written to expect that in the future
export const useMeasurementSets = (): MeasurementsSlice["measurementSets"] =>
  useApp(R.prop("measurementSets"));

export const useViewMeasurements = (): ViewMeasurementStore["viewMeasurements"] =>
  useApp(R.prop("viewMeasurements"));

export const useSetViewMeasurements = (): ViewMeasurementStore["setViewMeasurements"] =>
  useApp(R.prop("setViewMeasurements"));
