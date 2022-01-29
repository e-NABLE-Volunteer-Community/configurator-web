import { VFC } from "react";
import { useHistory, useRouteMatch } from "react-router";
import MeasurementSetItem from "../../components/measurement-set-item/measurement-set-item";
import { MeasurementSet } from "../../core/configurator-types";
import { useProfilePrintDevice } from "../../core/hooks/profiles";
import { useProfiles } from "../../core/stores/app";
import { isLoading } from "../../core/stores/utils";

const PrintDeviceSelectArm: VFC = () => {
  const profile = useProfilePrintDevice();
  const history = useHistory();
  const onMeasSetClick = (measurementSet: MeasurementSet) =>
    history.push(history.location.pathname + `/m${measurementSet.id}`);
  if (isLoading(profile) || !profile) return <div>loading...</div>;
  return (
    <div>
      {profile.measurements.map((measSet) => (
        <MeasurementSetItem
          measurementSet={measSet}
          onMeasSetClick={() => onMeasSetClick}
        />
      ))}
    </div>
  );
};

export default PrintDeviceSelectArm;
