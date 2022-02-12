import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { VFC } from "react";

const HeaderBig: VFC<{ title?: string; subtitle?: string; backUrl: string }> =
  ({ title, subtitle, backUrl }) => {
    return (
      <IonHeader className="header-big__">
        <IonToolbar>
          <IonTitle className="title">{title}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref={backUrl} />
          </IonButtons>
        </IonToolbar>
        <div className="subtitle">{subtitle}</div>
      </IonHeader>
    );
  };

export default HeaderBig;
