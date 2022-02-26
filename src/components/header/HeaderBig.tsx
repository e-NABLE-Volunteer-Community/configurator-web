import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonSearchbar,
} from "@ionic/react";
import { filterCircleOutline, funnelOutline } from "ionicons/icons";
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
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </IonToolbar>
    <IonToolbar>
      <IonSearchbar />
      <div className="sort-filter-row">
        <div className="sort-filter-item">
          <IonIcon icon={funnelOutline} />
          <div>Sort</div>
        </div>
        <div className="sort-filter-item">
          <IonIcon icon={filterCircleOutline} />
          <div>Filter</div>
        </div>
      </div>
    </IonToolbar>
  </IonHeader>
);

export default HeaderBig;
