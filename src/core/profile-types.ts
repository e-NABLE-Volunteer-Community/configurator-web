import { MeasurementSet } from "./configurator-types";
import { Device } from "./onshape-types";

export type Profile = {
  name: string;
  profileId: string;
  profileImageUrl: string;
  location?: string;
  created: Date;
  measurements: MeasurementSet[];
  devices: Device[];
};

export type ProfileId = {
  profileId: string;
};
