import { VFC } from "react";
import { Route } from "react-router-dom";
import { useActiveDevice } from "../../core/hooks/devices";
import DeviceList from "./DevicesList";
import DeviceDetails from "./DeviceDetails";
import { isLoading } from "../../core/stores/utils";
import { devicePath } from "./index";
import {
  AnimatedRoutes,
  RouteTransition,
} from "../../components/responsive/animation/route-transition";

//Shamelessly stolen from https://gist.github.com/stolinski/f33bbd5e01f37dd9e9003f0f40f55a4f#file-slidein-tsx-L26

const MobileRoutes: VFC = () => {
  return (
    <>
      {/* <Route path="/devices" exact component={DeviceList} />
      <Route path={devicePath} component={DeviceDetails} /> */}
      <AnimatedRoutes exitBeforeEnter initial={false}>
        <RouteTransition exact path="/devices">
          <DeviceList />
        </RouteTransition>
        <RouteTransition path={devicePath}>
          <DeviceDetails />
        </RouteTransition>
      </AnimatedRoutes>
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
