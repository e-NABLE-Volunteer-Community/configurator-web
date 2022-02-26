import { IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import { VFC } from "react";
import React from "react";

const HeaderLanding: VFC<{ title?: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => (
  <IonHeader className="header-landing__">
    <IonToolbar>
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </IonToolbar>
  </IonHeader>
);

export default HeaderLanding;
