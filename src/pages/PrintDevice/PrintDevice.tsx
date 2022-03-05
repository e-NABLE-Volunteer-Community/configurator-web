import { VFC } from "react";
import { Route } from "react-router";
import "../PrintDevice/print-device.scss";
import PrintDeviceSelectDevice from "./SelectDevice";
import PrintDeviceSelectArm from "./SelectArm";
import PrintDeviceDeviceDetails from "./DeviceDetails";
import PrintDeviceSelectProfile from "./SelectProfile";
import MeasurementCheck from "./MeasurementCheck";

const PrintDevice: VFC = () => {
  return (
    <>
      <div className="print-device__">
        <Route
          path="/print-device"
          exact
          component={PrintDeviceSelectProfile}
        />
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
        <Route
          path="/print-device/p/:profileId/m/:measSetId/d/:deviceId/meas-check"
          exact
          component={MeasurementCheck}
        />
      </div>
    </>
  );
};
export default PrintDevice;
