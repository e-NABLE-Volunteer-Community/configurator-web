import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import React, { VFC } from "react";
import { homePath } from "../../routes";
// parameter with ?: means optional parameter.

const HeaderSmall: VFC<{
  title?: string;
  subtitle?: string;
  backUrl?: string;
}> = ({
  title,
  subtitle, // refactor this with better names.
}) => (
  <IonHeader className="header-small__">
    <IonToolbar>
      <IonButtons slot="start" className="button">
        <IonBackButton defaultHref={homePath} />
      </IonButtons>
      <IonTitle>{title}</IonTitle>
    </IonToolbar>
  </IonHeader>
);

export default HeaderSmall;
