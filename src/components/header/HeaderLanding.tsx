import { IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import { VFC } from "react";
import React from "react";

const HeaderLanding: VFC<{ title?: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <IonHeader className="header-landing__">
      <IonToolbar>
        <IonTitle className="title">{title}</IonTitle>
      </IonToolbar>
      <div className="subtitle">{subtitle}</div>
    </IonHeader>
  );
};

export default HeaderLanding;
