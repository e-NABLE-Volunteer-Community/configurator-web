import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { VFC } from "react";
// parameter with ?: means optional parameter.
const Header: VFC<{ title: string; title2?: string; backUrl: string }> = ({
  title,
  title2, // refactor this with better names.
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
      <h1>{title2}</h1>
    </IonHeader>
  );
};

export default Header;
