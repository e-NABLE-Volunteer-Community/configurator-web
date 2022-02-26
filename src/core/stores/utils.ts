import { MeasurementsSlice } from "./measurements";
import { DevicesStore } from "./devices";
import { SetState } from "zustand";
import { ExportStatusStore } from "./export-status";
import { ProfileStore } from "./profiles";

export type RootState = MeasurementsSlice &
  DevicesStore &
  ExportStatusStore &
  ProfileStore;
export type StateSlice<T> = (set: SetState<RootState>) => T;
