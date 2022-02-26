import { VFC } from "react";
import { IonContent, IonPage } from "@ionic/react";
import { IfMobile, IfNotMobile } from "../../components/responsive/breakpoints";
import LandingBase from "./LandingBase";

const LandingPage: VFC = () => {
  return (
    <IonPage>
      <LandingBase></LandingBase>
    </IonPage>
  );
};
export default LandingPage;
