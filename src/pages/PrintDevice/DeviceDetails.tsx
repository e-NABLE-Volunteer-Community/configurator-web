import { VFC } from "react";
import { useHistory, useRouteMatch } from "react-router";
import DeviceItem from "../../components/device-item/device-item";
import MeasurementSetItem from "../../components/measurement-set-item/measurement-set-item";
import { MeasurementSet } from "../../core/configurator-types";
import { useProfilePrintDevice } from "../../core/hooks/profiles";
import { useDevices, useProfiles } from "../../core/stores/app";
import { isLoading } from "../../core/stores/utils";

const PrintDeviceDeviceDetails: VFC = () => {
  const devices = useDevices();
  const history = useHistory();
  const onDevDetailsClick = () =>
    history.push(history.location.pathname + `/d/$device`);

  if (isLoading(devices)) return <div>Loading..</div>;
  return (
    <div>
      <h1 className="print-device-profile-header">
        Which device would you like to print?
      </h1>
      {devices.map((d) => (
        <div key={d.documentId}>
          <DeviceItem
            device={d}
            onDeviceItemClick={onDevDetailsClick}
          ></DeviceItem>
        </div>
      ))}
    </div>
  );
};

export default PrintDeviceDeviceDetails;
