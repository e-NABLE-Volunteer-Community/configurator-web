import { MouseEventHandler, VFC } from "react";
import { Device } from "../../core/onshape-types";
import { capitalizeFirstLetter } from "../../core/util/string-manipulation";
import "../device-item/device-item.scss";

export type DeviceDetails = {
  device: Device;
  onDeviceDetailsClick: MouseEventHandler;
};

const DeviceDetails: VFC<DeviceDetails> = ({
  device,
  onDeviceDetailsClick,
}) => {
  return (
    <div
      key={device.documentId}
      className="item-card"
      onClick={onDeviceDetailsClick}
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

export default DeviceDetails;
