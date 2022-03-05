import { MouseEventHandler, VFC } from "react";
import { Device } from "../../core/onshape-types";
import { capitalizeFirstLetter } from "../../core/util/string-manipulation";
import "../device-item/device-item.scss";
import { profileDetailsPathForProfile } from "../../routes";
import SmallCard from "../small-card/SmallCard";

export type DeviceItem = {
  device: Device;
  onDeviceItemClick: MouseEventHandler;
};

const DeviceItem: VFC<DeviceItem> = ({ device, onDeviceItemClick }) => {
  return (
    <div
      key={device.documentId}
      className="item-card"
      onClick={onDeviceItemClick}
    >
      <div className="item-image">img</div>
      <div className="card-details">
        <div className="detail-title">{capitalizeFirstLetter(device.name)}</div>
        <div className="detail-text">$deviceNote</div>
      </div>
      <div className="item-date">$modifiedDate</div>
    </div>
  );
};

export default DeviceItem;
