import { VFC } from "react";
import { Measurement } from "../../core/configurator-types";
import "../measurement-item/measurement-item.scss";

const MeasurementItem: VFC<Measurement> = (measurement: Measurement) => {
  return (
    <div className="item-card">
      <div className="item-image">img</div>
      <div className="card-details">
        <div className="detail-title">{measurement.type}</div>
        <div className="detail-text">$measurementNote</div>
      </div>
      <div className="item-date">$modifiedDate</div>
    </div>
  );
};

export default MeasurementItem;
