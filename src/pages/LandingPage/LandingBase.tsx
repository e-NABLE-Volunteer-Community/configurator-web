import { VFC } from "react";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
} from "@ionic/react";
import { IfMobile, IfNotMobile } from "../../components/responsive/breakpoints";
import "../../theme/header.scss";
import {
  arrowBackOutline,
  funnelOutline,
  filterCircleOutline,
} from "ionicons/icons";

const LandingBase: VFC = () => {
  return (
    <>
      <IonHeader className="people-header">
        <div className="home-container">
          <div></div>
        </div>
        <div
          className="header-items"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            height: "65%",
          }}
        >
          <div className="header-text">Hello $Name</div>
          <div>What would you like to do today?</div>
        </div>
      </IonHeader>
      <div>BODY</div>
    </>
  );
};
export default LandingBase;
