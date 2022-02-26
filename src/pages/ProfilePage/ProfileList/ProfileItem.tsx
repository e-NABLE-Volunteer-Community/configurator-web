import { VFC } from "react";
import SmallCard from "../../../components/small-card/SmallCard";
import { Profile } from "../../../core/profile-types";
import { profileDetailsPathForProfile } from "../../../routes";

export type ProfileItem = {
  profile: Profile;
};

const ProfileItem: VFC<ProfileItem> = ({ profile }) => (
  <SmallCard
    primary={profile.name}
    secondary={profile.measurements.length + " measurements"}
    tertiary={profile.location}
    imgSrc={profile.profileImageUrl}
    routerLink={profileDetailsPathForProfile(profile)}
  />
);

export default ProfileItem;
