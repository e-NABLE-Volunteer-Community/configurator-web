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
import { VFC } from "react";
import { homePath } from "../../routes";
import "./header.scss";

const HeaderBig: VFC<{ title?: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => (
  <IonHeader className="header-big__">
    <IonToolbar>
      <IonTitle className="title">{title}</IonTitle>
      <IonButtons slot="start">
        <IonBackButton defaultHref={homePath} />
      </IonButtons>
    </IonToolbar>
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
  </IonHeader>
);

export default HeaderBig;
