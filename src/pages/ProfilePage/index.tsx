import { VFC } from "react";
import { IonContent, IonPage } from "@ionic/react";
import ProfileList from "./ProfileList/ProfileList";
import NewProfile from "./NewProfile/NewProfile";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import { Route, Switch } from "react-router";

const ProfilePage: VFC = () => {
  return (
    <>
      <IonPage>
        <IonContent>
          <Switch>
            <Route path="/profiles" exact component={ProfileList} />
            <Route path="/profiles/new" exact component={NewProfile} />
            <Route
              path="/profiles/p/:profileId"
              exact
              component={ProfileDetails}
            />
          </Switch>
        </IonContent>
      </IonPage>
    </>
  );
};
export default ProfilePage;
