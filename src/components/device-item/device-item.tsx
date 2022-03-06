import { VFC } from "react";
import { capitalizeFirstLetter } from "../../core/util/string-manipulation";
import "../device-item/device-item.scss";
import { devicePathForProfileAndDevice } from "../../routes";
import SmallCard from "../small-card/SmallCard";
import { useActiveProfile } from "../../core/hooks/profiles";
import { Device } from "../../core/types/bill-of-materials.types.new";

export type DeviceItem = {
  device: Device;
};

const DeviceItem: VFC<DeviceItem> = ({ device }) => {
  const profile = useActiveProfile();
  const url = devicePathForProfileAndDevice(profile, device);
  return (
    <SmallCard
      key={device.documentId}
      imgSrc={"https://picsum.photos/200"}
      primary={capitalizeFirstLetter(device.name)}
      secondary={device.description}
      routerLink={url}
    />
  );
};

export default DeviceItem;
