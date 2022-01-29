import { VFC } from "react";
import { useRouteMatch } from "react-router";
import { useProfilePrintDevice } from "../../core/hooks/profiles";
import { useProfiles } from "../../core/stores/app";
import { isLoading } from "../../core/stores/utils";

const PrintDeviceSelectArm: VFC = () => {
  const profile = useProfilePrintDevice();

  if (isLoading(profile) || !profile) return <div>loading...</div>;
  return <div>{profile.measurements}</div>;
};

export default PrintDeviceSelectArm;
