import { MouseEventHandler, VFC } from "react";
import { useHistory } from "react-router";
import { MeasurementSet } from "../../core/configurator-types";
import { capitalizeFirstLetter } from "../../core/util/string-manipulation";
import "../measurement-set-item/measurement-set-item.scss";
import SmallCard from "../small-card/SmallCard";
import { measurementSetDetailsPathForProfileAndMeasSet } from "../../routes";
import { useActiveProfile } from "../../core/hooks/profiles";

export type MeasurementSetItem = {
  measurementSet: MeasurementSet;
};

const MeasurementSetItem: VFC<MeasurementSetItem> = ({ measurementSet }) => {
  const activeProfileId = useActiveProfile().profileId;
  const url = measurementSetDetailsPathForProfileAndMeasSet(
    activeProfileId,
    measurementSet.id
  );

  return (
    <SmallCard
      key={measurementSet.id}
      routerLink={url}
      imgSrc={"https://picsum.photos/200"}
      primary={measurementSet.name}
      secondary={capitalizeFirstLetter(measurementSet.type)}
      tertiary={measurementSet.modifiedAt.toDateString()}
    />
  );
};

export default MeasurementSetItem;
