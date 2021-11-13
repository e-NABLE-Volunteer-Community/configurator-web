import React, { FC, VFC } from "react";
import {
  createAnimation,
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import DevicesPage from "./pages/DevicesPage";
import MeasurementsPage from "./pages/MeasurementsPage";
import { handLeft, peopleOutline } from "ionicons/icons";
import DeviceForm from "./pages/MeasurementsPage/MeasurementsForm";

// Swiper bundle styles
import "swiper/swiper-bundle.min.css";
// Import Swiper core and required modules, install modules
import SwiperCore, { Navigation } from "swiper";
import { AnimationBuilder } from "@ionic/core";

SwiperCore.use([Navigation]);

const Routes: VFC = () => {
  return (
    <>
      <Route key={1} path="/:tab(devices)" component={DevicesPage} />
      <Route key={2} path="/:tab(measurements)" component={MeasurementsPage} />
      <Route key={4} path="/" render={() => <Redirect to="/devices" />} exact />
      <Route key={5} path="/MeasurementPage" component={DeviceForm} />
    </>
  );
};

const App: FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet id="main">
            <Routes />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="devices" href="/devices">
              <IonIcon icon={handLeft} />
              <IonLabel>Devices</IonLabel>
            </IonTabButton>
            <IonTabButton tab="measurements" href="/measurements">
              <IonIcon icon={peopleOutline} />
              <IonLabel>Measurements</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
