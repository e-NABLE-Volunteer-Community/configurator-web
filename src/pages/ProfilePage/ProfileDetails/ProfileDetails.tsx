import { VFC } from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const ProfileDetails: VFC = () => {
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Profile Details</IonTitle>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/profiles" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div>details</div>
        </IonContent>
      </IonPage>
    </>
  );
};
export default ProfileDetails;
