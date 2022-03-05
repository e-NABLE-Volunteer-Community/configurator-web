import { useRouteMatch } from "react-router-dom";
import * as R from "ramda";

import { Profile, ProfileId } from "../profile-types";
import { useProfiles } from "../stores/app";
import { profileDetailsPath } from "../../routes";
import { useState } from "react";

export const useActiveProfile = (): Profile => {
  const [id] = useState(useMatchProfileRoute());
  if (!id) throw new Error("No profile ID in route");
  const profile = useMaybeProfileWithIds(id);
  if (!profile) throw new Error("No profile with ID " + id);
  return profile;
};

const useMatchProfileRoute = (): string | undefined =>
  useRouteMatch<ProfileId>(profileDetailsPath)?.params.profileId;

const objPropsMatch = (subset: Record<string, unknown>) =>
  R.allPass(R.map(([k, v]) => R.propEq(k, v), R.toPairs(subset)));

const useMaybeProfileWithIds = (id: string): Profile | undefined => {
  const profiles = useProfiles();
  if (!id) return undefined;
  return profiles.find(objPropsMatch({ profileId: id }));
};

export const useProfilePrintDevice = (): Profile | undefined => {
  const profiles = useProfiles();
  const path = "/print-device/p/:profileId";
  const [routeMatch] = useState(
    useRouteMatch<{ profileId: string; measurementSetId: string }>(path)
  );

  const activeProfileId = routeMatch?.params.profileId;

  if (!activeProfileId) return undefined;

  return profiles.find(R.propEq("profileId", activeProfileId));
};
