import { MeasurementsSlice } from "./measurements";
import { DevicesStore } from "./devices";
import { SetState } from "zustand";
import { ViewMeasurementStore } from "./view-measurements";
import { ExportStatusStore } from "./export-status";

export type RootState = MeasurementsSlice &
  DevicesStore &
  ViewMeasurementStore &
  ExportStatusStore;
export type StateSlice<T> = (set: SetState<RootState>) => T;
// Loading is a Symbol nonce used in the stead of real data to
// signal that store-supplied data is still being loaded
const loadingSymbol = Symbol("loading");
export const Loading = { [loadingSymbol]: "loading" };
export type Loading = typeof Loading;
export const isLoading = (unk: unknown): unk is Loading =>
  typeof unk === "object" &&
  unk !== null &&
  loadingSymbol in unk &&
  (unk as Loading)[loadingSymbol] === "loading";
