import { IonContent, IonPage } from "@ionic/react";
import { VFC } from "react";
import { useHistory } from "react-router";
import MeasurementSetItem from "../../components/measurement-set-item/measurement-set-item";
import { MeasurementSet } from "../../core/configurator-types";
import { useProfilePrintDevice } from "../../core/hooks/profiles";
import HeaderSmall from "../../components/header/HeaderSmall";

const PrintDeviceSelectArm: VFC = () => {
  const profile = useProfilePrintDevice();
  const history = useHistory();
  const onMeasSetClick = (measurementSet: MeasurementSet) =>
    history.push(history.location.pathname + `/m${measurementSet.id}`);

  if (!profile) throw new Error(); // TODO
  return (
    <IonPage>
      <HeaderSmall
        backUrl="/home"
        title="dots here"
        subtitle="Which arm would you like to create a device for? Tap to select."
      />
      <IonContent>
        {profile.measurements.map((measSet) => (
          <div key={measSet.id}>
            <MeasurementSetItem
              measurementSet={measSet}
              onMeasSetClick={() => onMeasSetClick}
            />
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default PrintDeviceSelectArm;
