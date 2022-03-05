import { Device, Fusion360Bom, OnshapeBom } from "../onshape-types";
import { StateSlice } from "./utils";
import fileDownload from "js-file-download";
import phoenixBom from "../../phoenix-v3-bom.json";
import fusionBom from "../../fusion-test-bom.json";
import { ExportId } from "./export-status";

export const mockDevices = (): Device[] => [
  {
    name: "Phoenix v3",
    description: "Lorem ipsem etc etc this is a prosthetic than you can print",
    billOfMaterials: phoenixBom as OnshapeBom,
    documentId: phoenixBom.location.documentId,
    workspaceId: phoenixBom.location.workspaceId,
  },
  {
    name: "Fusion Test",
    description: "Lorem ipsem etc etc this is a prosthetic than you can print",
    billOfMaterials: fusionBom as Fusion360Bom,
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
