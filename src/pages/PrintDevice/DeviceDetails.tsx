import { IonContent } from "@ionic/react";
import { VFC } from "react";
import { Route, useHistory, useRouteMatch } from "react-router";
import ScrollHeader from "../../components/header/scroll-header";
import ProfileItem from "../../components/profile-item/ProfileItem";
import { Profile } from "../../core/profile-types";
import { useProfiles } from "../../core/stores/app";
import { isLoading, Loading } from "../../core/stores/utils";
import "../PrintDevice/print-device.scss";
import PrintDeviceSelectDevice from "./SelectDevice";
import PrintDeviceSelectArm from "./SelectArm";
import DeviceDetails from "../../components/device-details/DeviceDetails";
import { useActiveDevice } from "../../core/hooks/devices";
import { Device } from "../../core/onshape-types";

const PrintDeviceDeviceDetails: VFC = () => {
  const device = useActiveDevice();
  const history = useHistory();
  const onDeviceDetailsClick = (device: Device) => history.push("123123");
  if (isLoading(device) || !device) return <div>loading...</div>;
  return (
    <div>
      <h1 className="print-device-profile-header">Confirm Device</h1>
      <DeviceDetails
        device={device}
        onDeviceDetailsClick={() => onDeviceDetailsClick(device)}
      ></DeviceDetails>
    </div>
  );
};

export default PrintDeviceDeviceDetails;
