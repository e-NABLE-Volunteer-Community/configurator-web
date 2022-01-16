import {
  MeasurementSetType,
  MeasurementSet,
  MeasurementTypes,
} from "../configurator-types";
import { Device } from "../onshape-types";
import { Profile } from "../profile-types";
import { Loading, StateSlice } from "./utils";
import { mockDevices } from "../stores/devices";

let mockArm: MeasurementSet = {
  id: "123",
  name: "My Right Arm",
  type: MeasurementSetType.arm,
  createdAt: new Date(),
  modifiedAt: new Date(),
  data: [
    {
      id: "453465364",
      type: MeasurementTypes.forearm,
      measurementTitle: "Elbow to wrist",
      data: 5,
      units: "cm",
    },
    {
      id: "534354",
      type: MeasurementTypes.elbowCircumference,
      measurementTitle: "Measure around the elbow",
      data: 15,
      units: "cm",
    },
    {
      id: "3456345745",
      type: MeasurementTypes.palm,
      measurementTitle: "Measure the width of the palm",
      data: 8,
      units: "cm",
    },
  ],
  associatedDevices: [{ device: mockDevices()[0], notes: "My Device" }],
};
const mockProfiles = (): Profile[] => [
  {
    name: "Jack Robinson",
    profileId: "123",
    profileImageUrl: "https://i.pravatar.cc/120?img=1",
    measurements: [mockArm],
    devices: mockDevices(),
  },
  {
    name: "Bigsby Smith",
    profileId: "5627",
    profileImageUrl: "https://i.pravatar.cc/120?img=2",
    measurements: [mockArm],
    devices: mockDevices(),
  },
  {
    name: "Bil Bless",
    profileId: "1233",
    profileImageUrl: "https://i.pravatar.cc/120?img=3",
    measurements: [mockArm],
    devices: mockDevices(),
  },
  {
    name: "Hudson Lee",
    profileId: "5647",
    profileImageUrl: "https://i.pravatar.cc/120?img=4",
    measurements: [mockArm],
    devices: mockDevices(),
  },
  {
    name: "Alix Perez",
    profileId: "1253",
    profileImageUrl: "https://i.pravatar.cc/120?img=5",
    measurements: [mockArm],
    devices: mockDevices(),
  },
  {
    name: "Greg Jones",
    profileId: "5667",
    profileImageUrl: "https://i.pravatar.cc/120?img=6",
    measurements: [mockArm],
    devices: mockDevices(),
  },
  {
    name: "DJ Derick",
    profileId: "56657",
    profileImageUrl: "https://i.pravatar.cc/120?img=5",
    measurements: [mockArm],
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
