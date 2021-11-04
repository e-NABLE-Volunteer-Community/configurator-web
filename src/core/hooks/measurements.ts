import { MeasurementSet, MeasurementSetId } from "../configurator-types";
import { useRouteMatch } from "react-router-dom";
import * as R from "ramda";
import { isLoading, Loading } from "../stores/utils";
import { useMeasurementSets } from "../stores/app";

export const useActiveMeasurementSet = ():
  | MeasurementSet
  | Loading
  | undefined => {
  const measurements = useMeasurementSets();
  const path = "/measurements/:id";
  const routeMatch = useRouteMatch<{ id: string }>(path);
  if (isLoading(measurements)) return Loading;
  const active = routeMatch?.params.id;
  if (!active) return undefined;
  return measurements.find(R.propEq("id", active));
};
