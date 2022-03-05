import * as R from "ramda";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import MeasurementCard from "../measurement-card/MeasurementCard";
import { VFC } from "react";
import { Measurement, MeasurementSet } from "../../core/configurator-types";
import "./measurement-grid.scss";

type MeasurementGridProps = {
  measurements: Measurement[];
};
// TODO: Fix margins so that the cards are flush with edges and there are 16px
//  between each card
const MeasurementGrid: VFC<MeasurementGridProps> = ({ measurements }) => (
  <IonGrid className="measurement-grid">
    {R.splitEvery(2, measurements).map((items) => (
      <IonRow>
        {items.map((item) => (
          <IonCol size="6">
            <MeasurementCard
              measurement={item}
              isChecked={false}
              key={item.id}
            />
          </IonCol>
        ))}
      </IonRow>
    ))}
  </IonGrid>
);
export default MeasurementGrid;
