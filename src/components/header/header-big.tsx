import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonInput,
  IonIcon,
} from "@ionic/react";
import { filterCircleOutline, funnelOutline } from "ionicons/icons";
import { VFC } from "react";
import { homePath } from "../../routes";

const HeaderBig: VFC<{ title?: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <IonHeader className="header-big__">
      <IonToolbar>
        <IonTitle className="title">{title}</IonTitle>
        <IonButtons slot="start">
          <IonBackButton defaultHref={homePath} />
        </IonButtons>
      </IonToolbar>
      <div className="search-bar">
        <IonInput
          placeholder=" Search for someone..."
          className="people-search"
        ></IonInput>
      </div>
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
};

export default HeaderBig;
