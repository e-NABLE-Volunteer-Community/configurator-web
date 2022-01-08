import { VFC } from "react";
import { IonContent, IonPage } from "@ionic/react";
import { IfMobile, IfNotMobile } from "../../components/responsive/breakpoints";
import LandingBase from "./LandingBase";

const LandingPage: VFC = () => {
  return (
    <IonPage>
      <IfNotMobile>
        <IonContent>
          <LandingBase></LandingBase>
        </IonContent>
      </IfNotMobile>

      <IfMobile>
        <IonContent>
          <LandingBase></LandingBase>
        </IonContent>
      </IfMobile>
    </IonPage>
  );
};
export default LandingPage;
