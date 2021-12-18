import { Profile } from "../profile-types";
import { Loading, StateSlice } from "./utils";

const mockProfiles = (): Profile[] => [
  {
    name: "Jack Robinson",
    profileId: "123",
    profileImageUrl: "https://i.pravatar.cc/120?img=1",
  },
  {
    name: "Bigsby Smith",
    profileId: "567",
    profileImageUrl: "https://i.pravatar.cc/120?img=2",
  },
  {
    name: "Bill Bless",
    profileId: "123",
    profileImageUrl: "https://i.pravatar.cc/120?img=3",
  },
  {
    name: "Hudson Lee",
    profileId: "567",
    profileImageUrl: "https://i.pravatar.cc/120?img=4",
  },
  {
    name: "Alix Perez",
    profileId: "123",
    profileImageUrl: "https://i.pravatar.cc/120?img=5",
  },
  {
    name: "Greg Jones",
    profileId: "567",
    profileImageUrl: "https://i.pravatar.cc/120?img=6",
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
