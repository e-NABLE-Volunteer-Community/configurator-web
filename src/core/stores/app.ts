import { createMeasurementsSlice, MeasurementsSlice } from "./measurements";
import create, { SetState, GetState } from "zustand";
import { persist, StoreApiWithPersist } from "zustand/middleware";
import { createDevicesSlice, DevicesStore } from "./devices";
import * as R from "ramda";
import { isLoading, Loading, RootState } from "./utils";
import {
  createViewMeasurementsSlice,
  ViewMeasurementStore,
} from "./view-measurements";
import { MeasurementInput } from "../view-measurement-types";

export const useApp = create(
  persist<
    RootState,
    SetState<RootState>,
    GetState<RootState>,
    StoreApiWithPersist<RootState>
  >(
    (set, get) => ({
      ...createMeasurementsSlice(set),
      ...createDevicesSlice(set),
      ...createViewMeasurementsSlice(set),
    }),
    { name: "measurement-storage" }
  )
);
export const useDevices = (): DevicesStore["devices"] =>
  useApp(R.prop("devices"));

// Returns null while still loading
// This won't happen until Measurements are stored remotely, but the app should be
// written to expect that in the future
export const useMeasurementSets = (): MeasurementsSlice["measurementSets"] =>
  useApp(R.prop("measurementSets"));

export const useViewMeasurements = (): ViewMeasurementStore["viewMeasurements"] =>
  useApp(R.prop("viewMeasurements"));

export const useViewMeasurementsFor = (
  measurementIndex: number,
  inputIndex: number
): Omit<MeasurementInput, "value"> | Loading => {
  return useApp(
    (state) => state.viewMeasurements[measurementIndex].inputs[inputIndex]
  );
};

export const useValueForUseMeasurement = (
  measurementIndex: number,
  inputIndex: number
): string | number | Loading => {
  return useApp(
    (state) => state.viewMeasurements[measurementIndex].inputs[inputIndex].value
  );
};

export const useSetViewMeasurements = (): ViewMeasurementStore["setViewMeasurements"] =>
  useApp(R.prop("setViewMeasurements"));

export const useUpdateNewMeasurementSet = (): MeasurementsSlice["updateNewMeasurementSet"] =>
  useApp(R.prop("updateNewMeasurementSet"));
