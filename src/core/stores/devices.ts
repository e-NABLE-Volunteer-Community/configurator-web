import { Device, Fusion360Bom, OnshapeBom } from "../onshape-types";
import { Loading, StateSlice } from "./utils";
import fileDownload from "js-file-download";
import phoenixBom from "../../phoenix-v3-bom.json";
import fusionBom from "../../fusion-test-bom.json";

const mockDevices = (): Device[] => [
  {
    name: "Phoenix v3",
    billOfMaterials: phoenixBom as OnshapeBom,
    documentId: phoenixBom.location.documentId,
    workspaceId: phoenixBom.location.workspaceId,
  },
  {
    name: "Fusion Test",
    billOfMaterials: fusionBom as Fusion360Bom,
    documentId: "1234",
    workspaceId: "5678",
  },
];

export type DevicesStore = {
  devices: Device[] | Loading;
  download: (device: Device) => void;
};
export const createDevicesSlice: StateSlice<DevicesStore> = () => {
  const download = async (device: Device) => {
    const res = await fetch("http://localhost:3007/export", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(device.billOfMaterials),
    });
    fileDownload(await res.blob(), device.name + ".zip");
  };
  return {
    devices: mockDevices(),
    download,
  };
};
