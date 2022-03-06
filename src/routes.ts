import { Profile } from "./core/profile-types";
import { MeasurementSet } from "./core/configurator-types";
import { Device } from "./core/types/bill-of-materials.types.new";

const idFromProfileOrId = (profileOrId: Profile | string): string =>
  typeof profileOrId === "string" ? profileOrId : profileOrId.profileId;
const idFromMeasurementSetOrId = (
  measSetOrId: MeasurementSet | string
): string => (typeof measSetOrId === "string" ? measSetOrId : measSetOrId.id);
const idFromDeviceOrId = (deviceOrId: Device | string): string =>
  typeof deviceOrId === "string" ? deviceOrId : deviceOrId.id.toString();

export const homePath = "/home";

/* Profiles */
export const profilesPath = "/profiles";
export const newProfilePath = `${profilesPath}/new`;

export const profileDetailsPath = `${profilesPath}/p/:profileId`;
export const profileDetailsPathForProfile = (
  profileOrId: Profile | string
): string => `${profilesPath}/p/${idFromProfileOrId(profileOrId)}`;

export const measurementSetsForProfilePath = `${profileDetailsPath}/m`;
export const measurementSetDetailsPath = `${profileDetailsPath}/m/:measurementSetId`;
export const measurementSetDetailsPathForProfileAndMeasSet = (
  profileOrId: Profile | string,
  measSetOrId: MeasurementSet | string
): string =>
  `${profileDetailsPathForProfile(profileOrId)}/m/${idFromMeasurementSetOrId(
    measSetOrId
  )}`;
export const newMeasurementsPath = `${measurementSetsForProfilePath}/new`;
export const newMeasurementSetPathForProfile = (
  profileOrId: Profile | string
): string => `${profileDetailsPathForProfile(profileOrId)}/m/new`;

export const deviceDetailsForProfilePath = `${profilesPath}/d/:deviceId`;
export const devicePathForProfileAndDevice = (
  profileOrId: Profile | string,
  deviceOrId: Device | string
) =>
  `${profileDetailsPathForProfile(profileOrId)}/d/${idFromDeviceOrId(
    deviceOrId
  )}`;

/* Devices */
export const devicesPath = "/devices";

/* Printing */
export const printDevicePath = "/print-device";
export const selectProfileForPrintPath = `${printDevicePath}/p/:profileId`;
export const selectMeasSetForPrintPath = `${selectProfileForPrintPath}/m/:measSetId`;
export const selectDeviceForPrintPath = `${selectMeasSetForPrintPath}/d/:deviceId`;
export const printDeviceMeasurementCheck = `${selectDeviceForPrintPath}/meas-check`;

export const printDeviceDetailsForPrintPath = (
  profileId: string,
  measSetId: string,
  deviceId: string
): string =>
  `${printDevicePath}/p/${profileId}/m/${measSetId}/d/${deviceId}/meas-check`;
