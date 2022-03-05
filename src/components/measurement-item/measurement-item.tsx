import { VFC } from "react";
import { Measurement } from "../../core/configurator-types";
import "../measurement-item/measurement-item.scss";

type MeasurementItemProps = { measurement: Measurement };
const MeasurementItem: VFC<MeasurementItemProps> = ({ measurement }) => (
  <div className="item-card" key={measurement.id}>
    <div className="item-image">img</div>
    <div className="card-details">
      <div className="detail-title">{measurement}</div>
      <div className="detail-text">$measurementNote</div>
    </div>
    <div className="item-date">$modifiedDate</div>
  </div>
);

export default MeasurementItem;
