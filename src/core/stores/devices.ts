import { Fusion360Bom, OnshapeBom } from "../onshape-types";
import { StateSlice } from "./utils";
import fileDownload from "js-file-download";
import phoenixBom from "../../phoenix-v3-bom.json";
import { ExportId } from "./export-status";
import { BillOfMaterials, Device } from "../types/bill-of-materials.types.new";

export const mockDevices = (): Device[] => [
  {
    id: 8898,
    name: "Phoenix v3",
    description: "Lorem ipsem etc etc this is a prosthetic than you can print",
    billOfMaterials: phoenixBom as unknown as BillOfMaterials,
    documentId: phoenixBom.location.documentId,
    workspaceId: phoenixBom.location.workspaceId,
  },
  {
    id: 8899,
    name: "Fusion Test",
    description: "Lorem ipsem etc etc this is a prosthetic than you can print",
    billOfMaterials: phoenixBom as unknown as BillOfMaterials,
    documentId: "1234",
    workspaceId: "5678",
  },
];

export type DevicesStore = {
  devices: Device[];
  exportDevice: (device: Device) => Promise<string>;
  downloadExportedDevice: (
    exportId: ExportId,
    deviceName: string
  ) => Promise<void>;
};
export const createDevicesSlice: StateSlice<DevicesStore> = () => {
  const exportDevice = async (device: Device): Promise<string> => {
    const res = await fetch("http://localhost:3007/export", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(device.billOfMaterials),
    });
    if (!res.body) throw new Error("Result had no body");
    return res.text();
  };
  const downloadExportedDevice = async (
    exportId: ExportId,
    deviceName: string
  ): Promise<void> => {
    const res = await fetch(`http://localhost:3007/export/${exportId}`);
    fileDownload(await res.blob(), deviceName + ".zip");
  };
  return {
    devices: mockDevices(),
    downloadExportedDevice,
    exportDevice,
  };
};
