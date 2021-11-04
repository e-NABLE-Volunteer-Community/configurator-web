import { VFC } from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IfNotMobile } from "../../../components/responsive/breakpoints";
import { addOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { MeasurementSet } from "../../../core/configurator-types";
import { isLoading } from "../../../core/stores/utils";
import { useMeasurementSets } from "../../../core/stores/app";

type BaseMeasurementsListProps = {
  onNewClicked: () => void;
  onItemClicked: (m: MeasurementSet) => void;
};
export const BaseMeasurementsList: VFC<BaseMeasurementsListProps> = ({
  onNewClicked,
  onItemClicked,
}) => {
  const measurementSets = useMeasurementSets();
  if (isLoading(measurementSets)) return <>Loading...</>; // TODO: Loading

  return (
    <>
      <IonContent>
        <IonList>
          <IonItem>
            <IonToolbar>
              <IonButtons>
                <IonButton onClick={onNewClicked}>
                  <IonIcon icon={addOutline} style={{ marginRight: "1rem" }} />
                  <IonLabel>Create New Measurements</IonLabel>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonItem>
          {measurementSets.map((m) => (
            <IonItem key={m.id} onClick={() => onItemClicked(m)}>
              {m.name}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </>
  );
};
export const MeasurementsList: VFC = () => {
  const history = useHistory();
  return (
    <>
      <IfNotMobile>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Measurements</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IfNotMobile>
      <BaseMeasurementsList
        onNewClicked={() => history.push("/measurements/new")}
        onItemClicked={(m) => history.push(`/measurements/${m.id}`)}
      />
    </>
  );
};
