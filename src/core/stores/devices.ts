import { Device } from "../onshape-types";
import phoenixBom from "../../phoenix-v3-bom.json";
import { Loading, StateSlice } from "./utils";

const mockDevices = (): Device[] => [
  {
    name: "Phoenix v3",
    billOfMaterials: phoenixBom,
    documentId: phoenixBom.documentId,
    workspaceId: phoenixBom.workspaceId,
  },
];

export type DevicesStore = {
  devices: Device[] | Loading;
};
export const createDevicesSlice: StateSlice<DevicesStore> = (set) => {
  return {
    devices: mockDevices(),
  };
};
