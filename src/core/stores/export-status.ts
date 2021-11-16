import { Loading, StateSlice } from "./utils";
import { io } from "socket.io-client";

export type ExportStatusState =
  | "queued"
  | "exporting"
  | "exported"
  | "zipping"
  | "completed"
  | "failed";

export type ExportId = string;
export type PartName = string;
type BaseExportStatus = {
  exportId: ExportId;
  state: ExportStatusState;
  queuedAt: Date;
};

type FinalizedExportStatus = BaseExportStatus & {
  finalizedAt: Date;
};

export type QueuedExportStatus = BaseExportStatus & {
  state: "queued";
};

export type PartExportState = "pending" | "queued" | "exporting" | "exported";
export type ExportingExportStatus = BaseExportStatus & {
  state: "exporting";
  parts: Record<PartName, PartExportState>;
};

export type ExportedExportStatus = BaseExportStatus & {
  state: "exported";
};

export type ZippingExportStatus = BaseExportStatus & {
  state: "zipping";
};

export type CompletedExportStatus = FinalizedExportStatus & {
  state: "completed";
};

export type FailedExportStatus = FinalizedExportStatus & {
  state: "failed";
  error: Error;
};

export type ExportStatus =
  | QueuedExportStatus
  | ExportingExportStatus
  | ExportedExportStatus
  | ZippingExportStatus
  | CompletedExportStatus
  | FailedExportStatus;

export type ExportStatusStore = {
  status: ExportStatus | Loading | undefined;
  watchExportStatus: (exportId: ExportId) => void;
};
export const createExportStatusSlice: StateSlice<ExportStatusStore> = (set) => {
  const watchExportStatus = (exportId: ExportId): void => {
    const socket = io("http://localhost:3008/export-status");
    socket.on("update", (status) => {
      set({ status });
      console.log({ status });
    });
    socket.emit("status", exportId);
  };

  return {
    // status: {
    //   exportId: "8e2f35e7-8219-45ae-97b9-ed4525221b50",
    //   state: "exporting",
    //   queuedAt: new Date(),
    //   parts: {
    //     "PIN-A": "queued",
    //     "PIN-C": "exporting",
    //     "PIN-D": "queued",
    //     "PIN-E": "queued",
    //     "PIN-F": "exporting",
    //     Distal: "exported",
    //     Thumb: "exporting",
    //     Pointer: "queued",
    //     Index: "exported",
    //     Ring: "queued",
    //     Pinky: "queued",
    //     "Right Palm": "queued",
    //     "ARM-GUARD": "exported",
    //     "Tensioner Block": "exported",
    //     Tensioner: "pending",
    //     Washer: "pending",
    //   },
    // },
    status: undefined,
    watchExportStatus,
  };
};
