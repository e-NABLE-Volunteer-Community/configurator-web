import { MouseEventHandler, VFC } from "react";
import { useHistory } from "react-router";
import { MeasurementSet } from "../../core/configurator-types";
import { capitalizeFirstLetter } from "../../core/util/string-manipulation";
import "../measurement-set-item/measurement-set-item.scss";

export type MeasurementSetItem = {
  measurementSet: MeasurementSet;
  onMeasSetClick: MouseEventHandler;
};

const MeasurementSetItem: VFC<MeasurementSetItem> = ({
  measurementSet,
  onMeasSetClick,
}) => {
  const history = useHistory();

  const thisUrl = history.location.pathname + `/m/${measurementSet.id}`;
  const onClick = () => history.push(thisUrl);

  var details: number | string;
  var unit: string;
  details = "todo";
  unit = "also todo";

  return (
    <div
      key={measurementSet.id}
      className="meas-set-container"
      onClick={onClick}
    >
      <div className="meas-set-item-image">img</div>
      <div className="meas-set-card-details">
        <div className="meas-set-detail-title">
          {capitalizeFirstLetter(measurementSet.type)}
        </div>
        <div className="meas-set-detail-text">{measurementSet.name}</div>
      </div>
      <div className="item-date">
        {measurementSet.modifiedAt.toDateString()}
      </div>
    </div>
  );
};

export default MeasurementSetItem;
