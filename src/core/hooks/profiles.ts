import { useRouteMatch } from "react-router-dom";
import * as R from "ramda";
import { isLoading, Loading } from "../stores/utils";

import { Profile, ProfileId } from "../profile-types";
import { useProfiles } from "../stores/app";

export const useActiveProfile = (): Profile | Loading | undefined =>
  useMaybeProfileWithIds(useMatchProfileRouteWithSuffix());

const route = "/profiles/p/:profileId";
const useMatchProfileRouteWithSuffix = (suffix?: string) =>
  useRouteMatch<ProfileId>(route + (suffix ?? ""))?.params;

const objPropsMatch = (subset: Record<string, unknown>) =>
  R.allPass(R.map(([k, v]) => R.propEq(k, v), R.toPairs(subset)));

const useMaybeProfileWithIds = (
  ids: ProfileId | undefined
): Profile | Loading | undefined => {
  const profiles = useProfiles();
  if (isLoading(profiles)) return Loading;
  if (!ids) return undefined;
  return profiles.find(objPropsMatch(ids));
};

export const useProfilePrintDevice = (): Profile | Loading | undefined => {
  const profiles = useProfiles();
  const path = "/print-device/p/:profileId";
  const routeMatch =
    useRouteMatch<{ profileId: string; measurementSetId: string }>(path);

  if (isLoading(profiles)) return Loading;

  const activeProfileId = routeMatch?.params.profileId;

  if (!activeProfileId) return undefined;

  return profiles.find(R.propEq("profileId", activeProfileId));
};
