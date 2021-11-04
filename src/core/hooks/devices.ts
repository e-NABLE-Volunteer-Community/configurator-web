import { Device, DocumentAndWorkspaceIds } from "../onshape-types";
import { useRouteMatch } from "react-router-dom";
import * as R from "ramda";
import { useDevices } from "../stores/app";
import { isLoading, Loading } from "../stores/utils";

export const useActiveDevice = (): Device | Loading | undefined =>
  useMaybeDeviceWithIds(useMatchDeviceRouteWithSuffix());

export const useGeneratingDevice = (): Device | Loading =>
  useAlwaysDeviceWithIds(useMatchDeviceRouteWithSuffix("/generate"));

const route = "/devices/d/:documentId/w/:workspaceId";
const useMatchDeviceRouteWithSuffix = (suffix?: string) =>
  useRouteMatch<DocumentAndWorkspaceIds>(route + (suffix ?? ""))?.params;

const objPropsMatch = (subset: Record<string, unknown>) =>
  R.allPass(R.map(([k, v]) => R.propEq(k, v), R.toPairs(subset)));

const useMaybeDeviceWithIds = (
  ids: DocumentAndWorkspaceIds | undefined
): Device | Loading | undefined => {
  const devices = useDevices();
  if (isLoading(devices)) return Loading;
  if (!ids) return undefined;
  return devices.find(objPropsMatch(ids));
};

const useAlwaysDeviceWithIds = (
  ids: DocumentAndWorkspaceIds | undefined
): Device | Loading => {
  const device = useMaybeDeviceWithIds(ids);
  if (!device) throw new Error("No device with IDs: " + JSON.stringify(ids));
  return device;
};
