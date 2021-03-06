import { VFC } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IfMobile, IfNotMobile } from "../../components/responsive/breakpoints";
import { Route } from "react-router-dom";
import { useActiveMeasurementSet } from "../../core/hooks/measurements";
import { Switch, useLocation } from "react-router";
import { MeasurementsList } from "./MeasurementsList";
import NewMeasurements from "./NewMeasurementsPage";

const MeasurementsDetails: VFC = () => {
  const activeMeasurementSet = useActiveMeasurementSet();

  if (!activeMeasurementSet) return <>Select Measurements</>;

  return (
    <IonContent>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IonText>Wrist Circumference: 20.0 cm</IonText>
        <IonText>Other Measurement: 15.0 mm</IonText>
        {/*<IonButton onClick={download}>Generate STLs</IonButton>*/}
      </div>
    </IonContent>
  );
};

const TabletDesktopView: VFC = () => {
  const activeMeasurementSet = useActiveMeasurementSet();

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: 400 }}>
        <MeasurementsList />
      </div>
      <IonHeader>
        <IonToolbar style={{ paddingTop: 8 }}>
          <IonTitle>
            {activeMeasurementSet?.name ?? "Select Measurements"}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent style={{ flex: 1, width: "100%", height: "100vh" }}>
        <Route
          path="/measurements/:measurementsId"
          exact
          component={MeasurementsDetails}
        />
        <Route path="/measurements/new" exact component={NewMeasurements} />
      </IonContent>
    </div>
  );
};

const MobileView: VFC = () => {
  const activeMeasurementSet = useActiveMeasurementSet();
  const isNew = useLocation().pathname === "/measurements/new";

  return (
    <>
      <IonHeader>
        <IonToolbar>
          {(activeMeasurementSet || isNew) && (
            <IfMobile>
              <IonButtons slot="start">
                <IonBackButton defaultHref="/measurements" />
              </IonButtons>
            </IfMobile>
          )}
          <IonTitle>
            {activeMeasurementSet?.name ??
              (isNew ? "New Measurements" : "Measurements")}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Switch>
          <Route path="/measurements" exact component={MeasurementsList} />
          <Route path="/measurements/new" exact component={NewMeasurements} />
          <Route
            path="/measurements/:measurementsId"
            exact
            component={MeasurementsDetails}
          />
        </Switch>
      </IonContent>
    </>
  );
};

const MeasurementsPage: VFC = () => {
  return (
    <IonPage>
      <IfNotMobile>
        <TabletDesktopView />
      </IfNotMobile>
      <IfMobile>
        <MobileView />
      </IfMobile>
    </IonPage>
  );
};
export default MeasurementsPage;
