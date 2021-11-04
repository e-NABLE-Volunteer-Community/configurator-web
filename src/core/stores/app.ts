import { createMeasurementsSlice, MeasurementsSlice } from "./measurements";
import create from "zustand";
import { createDevicesSlice, DevicesStore } from "./devices";
import * as R from "ramda";
import { RootState } from "./utils";

export const useApp = create<RootState>((set, get, api) => ({
  ...createMeasurementsSlice(set),
  ...createDevicesSlice(set),
}));
export const useDevices = (): DevicesStore["devices"] =>
  useApp(R.prop("devices"));

// Returns null while still loading
// This won't happen until Measurements are stored remotely, but the app should be
// written to expect that in the future
export const useMeasurementSets = (): MeasurementsSlice["measurementSets"] =>
  useApp(R.prop("measurementSets"));
