import { MeasurementSetType, ElbowMeasurements } from "../configurator-types";
import { Device } from "../onshape-types";
import { Profile } from "../profile-types";
import { Loading, StateSlice } from "./utils";
import { mockDevices } from "../stores/devices";

let mockElbow: ElbowMeasurements = {
  id: "123",
  name: "123",
  type: MeasurementSetType.elbow,
  createdAt: new Date(),
  modifiedAt: new Date(),
  data: {
    wristCircumference: "123",
    baseOfHandToTipOfMiddleFinger: 123,
  },
};

const mockProfiles = (): Profile[] => [
  {
    name: "Jack Robinson",
    profileId: "123",
    profileImageUrl: "https://i.pravatar.cc/120?img=1",
    measurements: [mockElbow],
    devices: mockDevices(),
  },
  {
    name: "Bigsby Smith",
    profileId: "5627",
    profileImageUrl: "https://i.pravatar.cc/120?img=2",
    measurements: [mockElbow],
    devices: mockDevices(),
  },
  {
    name: "Bill Bless",
    profileId: "1233",
    profileImageUrl: "https://i.pravatar.cc/120?img=3",
    measurements: [mockElbow],
    devices: mockDevices(),
  },
  {
    name: "Hudson Lee",
    profileId: "5647",
    profileImageUrl: "https://i.pravatar.cc/120?img=4",
    measurements: [mockElbow],
    devices: mockDevices(),
  },
  {
    name: "Alix Perez",
    profileId: "1253",
    profileImageUrl: "https://i.pravatar.cc/120?img=5",
    measurements: [mockElbow],
    devices: mockDevices(),
  },
  {
    name: "Greg Jones",
    profileId: "5667",
    profileImageUrl: "https://i.pravatar.cc/120?img=6",
    measurements: [mockElbow],
    devices: mockDevices(),
  },
];

export type ProfileStore = {
  profiles: Profile[] | Loading;
};

export const createProfilesSlice: StateSlice<ProfileStore> = () => {
  return {
    profiles: mockProfiles(),
  };
};
