import { VFC } from "react";
import { Device } from "../../core/onshape-types";
import { capitalizeFirstLetter } from "../../core/util/string-manipulation";
import "../device-item/device-item.scss";

const DeviceItem: VFC<Device> = (device: Device) => {
  return (
    <div key={device.documentId} className="item-card">
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
