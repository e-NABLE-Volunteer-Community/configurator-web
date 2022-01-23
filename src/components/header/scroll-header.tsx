import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { VFC } from "react";

const ScrollHeader: VFC<{ backUrl: string }> = ({ backUrl }) => {
  return (
    <IonHeader className="small-header">
      <IonToolbar>
        <IonTitle></IonTitle>
        <IonButtons slot="start">
          <IonBackButton defaultHref={backUrl} />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default ScrollHeader;
