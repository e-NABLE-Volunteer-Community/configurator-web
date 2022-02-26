import { MeasurementSet, MeasurementSetId } from "../configurator-types";
import { useRouteMatch } from "react-router-dom";
import * as R from "ramda";
import { useMeasurementSets, useProfiles } from "../stores/app";

export const useActiveMeasurementSet = (): MeasurementSet | undefined => {
  const measurements = useMeasurementSets();
  const path = "/measurements/:id";
  const routeMatch = useRouteMatch<{ id: string }>(path);
  const active = routeMatch?.params.id;
  if (!active) return undefined;
  return measurements.find(R.propEq("id", active));
};

export const useProfileMeasurementSet = (): MeasurementSet | undefined => {
  const profiles = useProfiles();
  const path = "/profiles/p/:profileId/m/:measurementSetId";
  const routeMatch =
    useRouteMatch<{ profileId: string; measurementSetId: string }>(path);

  const activeProfileId = routeMatch?.params.profileId;
  const activeMeasurementId = routeMatch?.params.measurementSetId;

  if (!activeProfileId || !activeMeasurementId) return undefined;

  return profiles
    .find(R.propEq("profileId", activeProfileId))
    ?.measurements.find(R.propEq("id", activeMeasurementId));
};
