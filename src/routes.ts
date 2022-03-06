import { Profile } from "./core/profile-types";
import { MeasurementSet } from "./core/configurator-types";

const idFromProfileOrId = (profileOrId: Profile | string): string =>
  typeof profileOrId === "string" ? profileOrId : profileOrId.profileId;
const idFromMeasurementSetOrId = (
  measSetOrId: MeasurementSet | string
): string => (typeof measSetOrId === "string" ? measSetOrId : measSetOrId.id);

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

/* Devices */
export const devicesPath = "/devices";

/* Printing */
export const printDevicePath = "/print-device";
export const selectProfileForPrintPath = `${printDevicePath}/p/:profileId`;
export const selectMeasSetForPrintPath = `${selectProfileForPrintPath}/m/:measSetId`;
export const selectDeviceForPrintPath = `${selectMeasSetForPrintPath}/d/:deviceId`;
export const printDeviceMeasurementCheck = `${selectDeviceForPrintPath}/meas-check`;
export const exportDevicePath = `${selectDeviceForPrintPath}/export`;

export const exportDeviceForPrintPath = (
  profileId: string,
  measSetId: string,
  deviceId: string
): string =>
  `${printDevicePath}/p/${profileId}/m/${measSetId}/d/${deviceId}/export`;

export const printDeviceDetailsForPrintPath = (
  profileId: string,
  measSetId: string,
  deviceId: string
): string =>
  `${printDevicePath}/p/${profileId}/m/${measSetId}/d/${deviceId}/meas-check`;
