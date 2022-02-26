export const tabifyPath = (path: string): string =>
  `/:tab(${path.replace(/^\//, "")})`;
export const devicesPath = "/devices";
export const measurementsPath = "/measurements";
export const profilesPath = "/profiles";
export const printDevicePath = "/print-device";
export const homePath = "/home";

export const newProfilePath = `${profilesPath}/new`;
export const profileDetailsPath = `${profilesPath}/p/:profileId`;
export const measurementSetDetailsPath = `${profileDetailsPath}/m/:measurementSetId`;
