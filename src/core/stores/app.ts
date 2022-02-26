import { createMeasurementsSlice, MeasurementsSlice } from "./measurements";
import create, { GetState, SetState } from "zustand";
import { persist, StoreApiWithPersist } from "zustand/middleware";
import { createDevicesSlice, DevicesStore } from "./devices";
import { createProfilesSlice, ProfileStore } from "./profiles";
import * as R from "ramda";
import { RootState } from "./utils";
import {
  createViewMeasurementsSlice,
  ViewMeasurementStore,
} from "./view-measurements";
import { MeasurementInput } from "../view-measurement-types";
import { createExportStatusSlice } from "./export-status";

export const useApp = create<RootState>((set, get) => ({
  ...createMeasurementsSlice(set),
  ...createDevicesSlice(set),
  ...createExportStatusSlice(set),
  ...createProfilesSlice(set),
}));

export const useViewMeasurementsStore = create(
  persist<
    ViewMeasurementStore,
    SetState<ViewMeasurementStore>,
    GetState<ViewMeasurementStore>,
    StoreApiWithPersist<ViewMeasurementStore>
  >(createViewMeasurementsSlice, {
    name: "measurement-storage",
  })
);

export const useDevices = (): DevicesStore["devices"] =>
  useApp(R.prop("devices"));

export const useProfiles = (): ProfileStore["profiles"] =>
  useApp(R.prop("profiles"));

// Returns null while still loading
// This won't happen until Measurements are stored remotely, but the app should be
// written to expect that in the future
export const useMeasurementSets = (): MeasurementsSlice["measurementSets"] =>
  useApp(R.prop("measurementSets"));

export const useViewMeasurements =
  (): ViewMeasurementStore["viewMeasurements"] =>
    useViewMeasurementsStore(R.prop("viewMeasurements"));

export const useViewMeasurementsAlwaysUpdate =
  (): ViewMeasurementStore["viewMeasurements"] =>
    useViewMeasurementsStore(R.prop("viewMeasurements"), () => false);

export const useMeasInput = (
  measurementIndex: number,
  inputIndex: number
): Omit<MeasurementInput, "value"> => {
  return useViewMeasurementsStore(
    (state) => state.viewMeasurements[measurementIndex].inputs[inputIndex]
  );
};

export const useValueForMeasInput = (
  measurementIndex: number,
  inputIndex: number
): string | number | null => {
  const valueSelector = (state: ViewMeasurementStore) =>
    state.viewMeasurements[measurementIndex].inputs[inputIndex].value;
  return useViewMeasurementsStore(valueSelector);
};

export const useSetValueForMeasInput = (
  measurementIndex: number,
  inputIndex: number
) => {
  const set = useSetViewMeasurements();
  const viewMeasurements = useViewMeasurements();
  return (value: string | number) => {
    viewMeasurements[measurementIndex].inputs[inputIndex].value = value;
    set(viewMeasurements);
  };
};

export const useSetViewMeasurements =
  (): ViewMeasurementStore["setViewMeasurements"] =>
    useViewMeasurementsStore(R.prop("setViewMeasurements"));

export const useUpdateNewMeasurementSet =
  (): MeasurementsSlice["updateNewMeasurementSet"] =>
    useApp(R.prop("updateNewMeasurementSet"));

export const useExportDevice = () => useApp(R.prop("exportDevice"));
export const useWatchExportStatus = () => useApp(R.prop("watchExportStatus"));
export const useExportStatus = () => useApp(R.prop("status"));
export const useDownloadExportedDevice = () =>
  useApp(R.prop("downloadExportedDevice"));
