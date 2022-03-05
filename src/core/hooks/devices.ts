import { Device, DocumentAndWorkspaceIds } from "../onshape-types";
import { useRouteMatch } from "react-router-dom";
import * as R from "ramda";
import { useDevices } from "../stores/app";

export const useActivePrintDevice = (): Device | undefined => {
  const printDeviceRoute =
    "/print-device/p/:profileId/m/:measurementSetId/d/:documentId";
  const devices = useDevices();
  const routeMatch = useRouteMatch<{
    profileId: string;
    measurementSetId: string;
    documentId: string;
  }>(printDeviceRoute);

  const activeProfileId = routeMatch?.params.profileId;
  const activeMeasurementId = routeMatch?.params.measurementSetId;
  const documentId = routeMatch?.params.documentId;

  if (!activeProfileId || !activeMeasurementId || !documentId) return undefined;
  return devices.find(R.propEq("documentId", documentId));
};

export const useActiveDevice = (): Device | undefined =>
  useMaybeDeviceWithIds(useMatchDeviceRouteWithSuffix());

export const useGeneratingDevice = (): Device =>
  useAlwaysDeviceWithIds(useMatchDeviceRouteWithSuffix("/generate"));

const route = "/devices/d/:documentId/w/:workspaceId";
const useMatchDeviceRouteWithSuffix = (suffix?: string) =>
  useRouteMatch<DocumentAndWorkspaceIds>(route + (suffix ?? ""))?.params;

const objPropsMatch = (subset: Record<string, unknown>) =>
  R.allPass(R.map(([k, v]) => R.propEq(k, v), R.toPairs(subset)));

const useMaybeDeviceWithIds = (
  ids: DocumentAndWorkspaceIds | undefined
): Device | undefined => {
  const devices = useDevices();
  if (!ids) return undefined;
  return devices.find(objPropsMatch(ids));
};

const useAlwaysDeviceWithIds = (
  ids: DocumentAndWorkspaceIds | undefined
): Device => {
  const device = useMaybeDeviceWithIds(ids);
  if (!device) throw new Error("No device with IDs: " + JSON.stringify(ids));
  return device;
};
