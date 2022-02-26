import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { VFC } from "react";
import { homePath } from "../../routes";
// parameter with ?: means optional parameter.

const HeaderSmall: VFC<{
  title?: string;
  subtitle?: string;
  backUrl?: string;
}> = ({
  title,
  subtitle, // refactor this with better names.
}) => {
  return (
    <IonHeader className="header-small__">
      <IonToolbar>
        <IonButtons slot="start" className="button">
          <IonBackButton defaultHref={homePath} />
        </IonButtons>

        <IonTitle className="title">{title}</IonTitle>
      </IonToolbar>
      <div className="subtitle">{subtitle}</div>
    </IonHeader>
  );
};

export default HeaderSmall;
