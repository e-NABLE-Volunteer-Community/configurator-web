import { VFC } from "react";
import { Route, useHistory } from "react-router-dom";
import { MeasurementSet } from "../../../core/configurator-types";
import { useProfileMeasurementSet } from "../../../core/hooks/measurements";
import { isLoading, Loading } from "../../../core/stores/utils";

const MeasurementSetDetails: VFC<MeasurementSet> = () => {
  const profileMeasurementSet = useProfileMeasurementSet();

  if (!profileMeasurementSet || isLoading(profileMeasurementSet))
    return <div>loading</div>;

  console.log("m: ", profileMeasurementSet);
  return <div>{profileMeasurementSet.name}</div>;
};

export default MeasurementSetDetails;
