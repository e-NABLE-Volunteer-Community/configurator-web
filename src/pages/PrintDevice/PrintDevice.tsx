import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
} from "@ionic/react";
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
import PrintDeviceDeviceDetails from "./DeviceDetails";
import ProfileItemCompact from "../../components/profile-item-compact/ProfileItem";
import PrintDeviceSelectProfile from "./SelectProfile";
import Header from "../../components/header/header";

const PrintDevice: VFC = () => {
  return (
    <>
      <Route path="/print-device" exact component={PrintDeviceSelectProfile} />
      <Route
        path="/print-device/p/:profileId"
        exact
        component={PrintDeviceSelectArm}
      />
      {/* this is all conditional rendering based on ID using hooks, don't F with them yet */}
      <Route
        path="/print-device/p/:profileId/m/:measSetId"
        exact
        component={PrintDeviceSelectDevice}
      />
      <Route
        path="/print-device/p/:profileId/m/:measSetId/d/:deviceId"
        exact
        component={PrintDeviceDeviceDetails}
      />
    </>
  );
};
export default PrintDevice;
