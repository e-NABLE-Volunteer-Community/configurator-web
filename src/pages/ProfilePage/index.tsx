import React, { VFC } from "react";
import { IonRouterOutlet } from "@ionic/react";
import ProfileListPage from "./ProfileList/ProfileListPage";
import NewProfilePage from "./NewProfile/NewProfilePage";
import ProfileDetailsPage from "./ProfileDetails/ProfileDetailsPage";
import MeasurementSetDetailsPage from "../MeasurementsPage/MeasurementSetDetails/index";
import { Route } from "react-router";
import {
  measurementSetDetailsPath,
  newProfilePath,
  profileDetailsPath,
  profilesPath,
} from "../../routes";

const ProfilePage: VFC = () => {
  return (
    <>
      <IonRouterOutlet>
        <Route path={profilesPath} exact component={ProfileListPage} />
        <Route path={newProfilePath} exact component={NewProfilePage} />
        <Route path={profileDetailsPath} exact component={ProfileDetailsPage} />
        <Route
          path={measurementSetDetailsPath}
          exact
          component={MeasurementSetDetailsPage}
        />
      </IonRouterOutlet>
    </>
  );
};
export default ProfilePage;
