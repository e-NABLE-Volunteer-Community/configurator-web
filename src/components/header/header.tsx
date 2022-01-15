import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { VFC } from "react";

const Header: VFC<{ title: string; backUrl: string }> = ({
  title,
  backUrl,
}) => {
  return (
    <IonHeader className="small-header">
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="start">
          <IonBackButton defaultHref={backUrl} />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
