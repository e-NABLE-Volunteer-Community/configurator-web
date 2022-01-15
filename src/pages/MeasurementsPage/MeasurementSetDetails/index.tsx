import { VFC } from "react";
import { Route, useHistory } from "react-router-dom";
import Header from "../../../components/responsive/header/header";
import { MeasurementSet } from "../../../core/configurator-types";
import { useProfileMeasurementSet } from "../../../core/hooks/measurements";
import { useActiveProfile } from "../../../core/hooks/profiles";
import { isLoading, Loading } from "../../../core/stores/utils";

const MeasurementSetDetails: VFC<MeasurementSet> = () => {
  const profileMeasurementSet = useProfileMeasurementSet();
  const activeProfile = useActiveProfile();

  if (
    !profileMeasurementSet ||
    !activeProfile ||
    isLoading(profileMeasurementSet) ||
    isLoading(activeProfile)
  )
    return <div>loading</div>;

  console.log("m: ", profileMeasurementSet);
  return (
    <div>
      <Header title={activeProfile.name} backUrl="/profiles"></Header>

      {profileMeasurementSet.name}
    </div>
  );
};

export default MeasurementSetDetails;
