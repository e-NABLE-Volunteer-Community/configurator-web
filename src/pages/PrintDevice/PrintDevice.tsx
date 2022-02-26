import { VFC } from "react";
import { Route } from "react-router";
import "../PrintDevice/print-device.scss";
import PrintDeviceSelectDevicePage from "./SelectDevice";
import PrintDeviceSelectArmPage from "./SelectArm";
import PrintDeviceDeviceDetailsPage from "./DeviceDetails";
import PrintDeviceSelectProfilePage from "./SelectProfile";

const PrintDevice: VFC = () => {
  return (
    <>
      <Route
        path="/print-device"
        exact
        component={PrintDeviceSelectProfilePage}
      />
      <Route
        path="/print-device/p/:profileId"
        exact
        component={PrintDeviceSelectArmPage}
      />
      {/* this is all conditional rendering based on ID using hooks, don't F with them yet */}
      <Route
        path="/print-device/p/:profileId/m/:measSetId"
        exact
        component={PrintDeviceSelectDevicePage}
      />
      <Route
        path="/print-device/p/:profileId/m/:measSetId/d/:deviceId"
        exact
        component={PrintDeviceDeviceDetailsPage}
      />
    </>
  );
};
export default PrintDevice;
