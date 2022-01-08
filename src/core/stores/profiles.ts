import { MeasurementsType, ElbowMeasurements } from "../configurator-types";
import { Profile } from "../profile-types";
import { Loading, StateSlice } from "./utils";

let mockElbow: ElbowMeasurements = {
  id: "123",
  name: "123",
  type: MeasurementsType.elbow,
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
    devices: [],
  },
  {
    name: "Bigsby Smith",
    profileId: "5627",
    profileImageUrl: "https://i.pravatar.cc/120?img=2",
    measurements: [mockElbow],
    devices: [],
  },
  {
    name: "Bill Bless",
    profileId: "1233",
    profileImageUrl: "https://i.pravatar.cc/120?img=3",
    measurements: [mockElbow],
    devices: [],
  },
  {
    name: "Hudson Lee",
    profileId: "5647",
    profileImageUrl: "https://i.pravatar.cc/120?img=4",
    measurements: [mockElbow],
    devices: [],
  },
  {
    name: "Alix Perez",
    profileId: "1253",
    profileImageUrl: "https://i.pravatar.cc/120?img=5",
    measurements: [mockElbow],
    devices: [],
  },
  {
    name: "Greg Jones",
    profileId: "5667",
    profileImageUrl: "https://i.pravatar.cc/120?img=6",
    measurements: [mockElbow],
    devices: [],
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
