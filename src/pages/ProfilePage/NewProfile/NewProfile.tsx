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
import { Profile } from "../../../core/profile-types";
import { IfMobile } from "../../../components/responsive/breakpoints";

const NewProfile: VFC = () => {
  const newProfile: Partial<Profile> = {};

  return (
    <div>
      <IonHeader>
        <IonToolbar>
          <IonTitle>New Profile</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/profiles" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </div>
  );
};
export default NewProfile;
