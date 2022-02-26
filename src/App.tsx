import React, { FC, VFC } from "react";
import {
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
import DevicesTab from "./pages/DevicesPage";
import MeasurementsTab from "./pages/MeasurementsPage";
import { homeOutline, peopleOutline, printOutline } from "ionicons/icons";
import ProfileTab from "./pages/ProfilePage";

// Swiper bundle styles
import "swiper/swiper-bundle.min.css";
// Import Swiper core and required modules, install modules
import SwiperCore, { Navigation } from "swiper";
import LandingTab from "./pages/LandingPage";
import PrintDeviceTab from "./pages/PrintDevice/PrintDevice";
import {
  devicesPath,
  homePath,
  measurementsPath,
  printDevicePath,
  profilesPath,
  tabifyPath,
} from "./routes";

SwiperCore.use([Navigation]);

const Routes: VFC = () => {
  return (
    <>
      <Route path={tabifyPath(profilesPath)} component={ProfileTab} />
      <Route path={tabifyPath(printDevicePath)} component={PrintDeviceTab} />
      <Route path={tabifyPath(homePath)} component={LandingTab} />
      <Route>
        <Redirect to={homePath} />
      </Route>
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
            <IonTabButton tab="home" href={homePath}>
              <IonIcon icon={homeOutline} />
            </IonTabButton>
            <IonTabButton tab="profiles" href={profilesPath}>
              <IonIcon icon={peopleOutline} />
            </IonTabButton>
            <IonTabButton tab="print-device" href={printDevicePath}>
              <IonIcon icon={printOutline} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
