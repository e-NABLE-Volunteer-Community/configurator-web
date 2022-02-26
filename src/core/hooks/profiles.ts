import { useRouteMatch } from "react-router-dom";
import * as R from "ramda";

import { Profile, ProfileId } from "../profile-types";
import { useProfiles } from "../stores/app";

export const useActiveProfile = (): Profile | undefined =>
  useMaybeProfileWithIds(useMatchProfileRouteWithSuffix());

const route = "/profiles/p/:profileId";
const useMatchProfileRouteWithSuffix = (suffix?: string) =>
  useRouteMatch<ProfileId>(route + (suffix ?? ""))?.params;

const objPropsMatch = (subset: Record<string, unknown>) =>
  R.allPass(R.map(([k, v]) => R.propEq(k, v), R.toPairs(subset)));

const useMaybeProfileWithIds = (
  ids: ProfileId | undefined
): Profile | undefined => {
  const profiles = useProfiles();
  if (!ids) return undefined;
  return profiles.find(objPropsMatch(ids));
};

export const useProfilePrintDevice = (): Profile | undefined => {
  const profiles = useProfiles();
  const path = "/print-device/p/:profileId";
  const routeMatch =
    useRouteMatch<{ profileId: string; measurementSetId: string }>(path);

  const activeProfileId = routeMatch?.params.profileId;

  if (!activeProfileId) return undefined;

  return profiles.find(R.propEq("profileId", activeProfileId));
};
