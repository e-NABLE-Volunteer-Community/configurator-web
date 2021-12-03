import { VFC } from "react";
import { IonContent, IonPage } from "@ionic/react";
import ProfileList from "./ProfileList";

const ProfilePage: VFC = () => {
  return (
    <>
      <IonPage>
        <ProfileList />
      </IonPage>
    </>
  );
};
export default ProfilePage;
