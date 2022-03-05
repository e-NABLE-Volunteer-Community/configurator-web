import {
  MeasurementSet,
  MeasurementSetId,
  MeasurementSetType,
} from "../configurator-types";
import { useRouteMatch } from "react-router-dom";
import * as R from "ramda";
import { useMeasurementSets, useProfiles } from "../stores/app";
import { useState } from "react";
import { measurementSetDetailsPath } from "../../routes";

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
  const routeMatch = useRouteMatch<{
    profileId: string;
    measurementSetId: string;
  }>(measurementSetDetailsPath);

  const [activeProfileId] = useState(routeMatch?.params.profileId);
  const [activeMeasurementId] = useState(routeMatch?.params.measurementSetId);

  if (!activeProfileId || !activeMeasurementId) return undefined;
  const activeProfileMeasurementSet = profiles
    .find(R.propEq("profileId", activeProfileId))
    ?.measurements.find(R.propEq("id", activeMeasurementId));
  if (!activeProfileMeasurementSet)
    throw new Error(
      "No measurement set with ID " +
        activeMeasurementId +
        " for profile " +
        activeProfileId
    );

  return activeProfileMeasurementSet;
};

export const useHumanReadableMeasurementSetType =
  () =>
  (type: MeasurementSetType): string => {
    const strings: Record<MeasurementSetType, string> = {
      fingers: "Fingers",
      hand: "Hand",
      elbow: "Elbow",
      shoulder: "Shoulder",
      arm: "Arm",
    };
    return strings[type];
  };
