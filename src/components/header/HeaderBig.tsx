import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonSearchbar,
  IonToolbar,
} from "@ionic/react";
import { filterOutline, funnelOutline } from "ionicons/icons";
import React, { VFC } from "react";
import { homePath } from "../../routes";
import "./header.scss";

const HeaderBig: VFC<{ title?: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => (
  <IonHeader className="header-big__">
    <IonToolbar>
      <IonButtons>
        <IonBackButton defaultHref={homePath} />
      </IonButtons>
      <div className="header-text">
        <h1>{title}</h1>
        <p className="body-medium">{subtitle}</p>
      </div>
    </IonToolbar>
    <IonToolbar>
      <IonSearchbar />
      <div className="sort-filter-row">
        <div className="sort-filter-item">
          <p className="body-medium">Sort</p>
          <IonIcon icon={funnelOutline} />
        </div>
        <div className="sort-filter-item">
          <p className="body-medium">Filter your search</p>
          <IonIcon icon={filterOutline} />
        </div>
      </div>
    </IonToolbar>
  </IonHeader>
);

export default HeaderBig;
