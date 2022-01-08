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
import { useActiveProfile } from "../../../core/hooks/profiles";
import { isLoading } from "../../../core/stores/utils";

import "../../../theme/header.scss";

const ProfileDetails: VFC = () => {
  const activeProfile = useActiveProfile();
  if (isLoading(activeProfile) || !activeProfile) return <>Loading...</>;
  return (
    <>
      <IonPage>
        <IonHeader className="small-header">
          <IonToolbar>
            <IonTitle>{activeProfile.name}</IonTitle>
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
