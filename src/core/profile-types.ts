import { MeasurementSet } from "./configurator-types";
import { Device } from "./types/bill-of-materials.types.new";

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
