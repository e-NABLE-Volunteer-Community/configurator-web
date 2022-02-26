import React, { FC } from "react";
import {
  IonApp,
  IonIcon,
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
import "./theme/design-system.scss";
import { homeOutline, peopleOutline, printOutline } from "ionicons/icons";

// Swiper bundle styles
import "swiper/swiper-bundle.min.css";
// Import Swiper core and required modules, install modules
import SwiperCore, { Navigation } from "swiper";
import LandingPage from "./pages/LandingPage";
import {
  homePath,
  measurementSetDetailsPath,
  newMeasurementsPath,
  newProfilePath,
  printDevicePath,
  profileDetailsPath,
  profilesPath,
  selectDeviceForPrintPath,
  selectMeasSetForPrintPath,
  selectProfileForPrintPath,
} from "./routes";
import ProfileListPage from "./pages/ProfilePage/ProfileList/ProfileListPage";
import NewProfilePage from "./pages/ProfilePage/NewProfile/NewProfilePage";
import ProfileDetailsPage from "./pages/ProfilePage/ProfileDetails/ProfileDetailsPage";
import MeasurementSetDetailsPage from "./pages/MeasurementsPage/MeasurementSetDetails";
import PrintDeviceSelectProfilePage from "./pages/PrintDevice/SelectProfile";
import PrintDeviceSelectArmPage from "./pages/PrintDevice/SelectArm";
import PrintDeviceSelectDevicePage from "./pages/PrintDevice/SelectDevice";
import PrintDeviceDeviceDetailsPage from "./pages/PrintDevice/DeviceDetails";
import NewMeasurementsPage from "./pages/MeasurementsPage/NewMeasurementsPage";

SwiperCore.use([Navigation]);

const App: FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet id="main">
          <Route exact path={homePath} component={LandingPage} />
          <Route exact path={profilesPath} component={ProfileListPage} />
          <Route exact path={newProfilePath} component={NewProfilePage} />
          <Route
            exact
            path={newMeasurementsPath}
            component={NewMeasurementsPage}
          />
          <Route
            exact
            path={profileDetailsPath}
            component={ProfileDetailsPage}
          />
          <Route
            exact
            path={measurementSetDetailsPath}
            component={MeasurementSetDetailsPage}
          />
          <Route
            exact
            path={printDevicePath}
            component={PrintDeviceSelectProfilePage}
          />
          <Route
            exact
            path={selectProfileForPrintPath}
            component={PrintDeviceSelectArmPage}
          />
          <Route
            exact
            path={selectMeasSetForPrintPath}
            component={PrintDeviceSelectDevicePage}
          />
          <Route
            exact
            path={selectDeviceForPrintPath}
            component={PrintDeviceDeviceDetailsPage}
          />
          <Route>
            <Redirect to={homePath} />
          </Route>
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

export default App;
