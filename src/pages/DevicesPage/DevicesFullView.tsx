import { VFC } from "react";
import DeviceDetails from "./DeviceDetails";
import DeviceList from "./DevicesList";

export const TabletDesktopView: VFC = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: 400 }}>
        <DeviceList />
      </div>
      <div style={{ flex: 1 }}>
        <DeviceDetails />
      </div>
    </div>
  );
};
