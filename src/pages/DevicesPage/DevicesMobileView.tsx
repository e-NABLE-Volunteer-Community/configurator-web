import { VFC } from "react";
import { Route } from "react-router-dom";
import { useActiveDevice } from "../../core/hooks/devices";
import DeviceList from "./DevicesList";
import DeviceDetails from "./DeviceDetails";
import { isLoading } from "../../core/stores/utils";
import { devicePath } from "./index";

const MobileRoutes: VFC = () => {
  return (
    <>
      <Route path="/devices" exact component={DeviceList} />
      <Route path={devicePath} component={DeviceDetails} />
    </>
  );
};

// TODO: Mobile page transitions
export const MobileView: VFC = () => {
  const device = useActiveDevice();
  if (isLoading(device)) return <>Loading...</>; // TODO: Loading

  return (
    <>
      <MobileRoutes />
    </>
  );
};
