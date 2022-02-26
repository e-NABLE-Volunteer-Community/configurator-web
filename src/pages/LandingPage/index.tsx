import { VFC } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonTitle,
} from "@ionic/react";
import HeaderLanding from "../../components/header/HeaderLanding";
import {
  chevronForward,
  handLeftOutline,
  peopleOutline,
  personAddOutline,
  printOutline,
} from "ionicons/icons";
import {
  devicesPath,
  newProfilePath,
  printDevicePath,
  profilesPath,
} from "../../routes";
import "./LandingPage.scss";

type LandingPageCard = {
  href: string;
  icon: string;
  title: string;
  subtitle: string;
};
const LandingPageCard: VFC<LandingPageCard> = (props) => {
  const { href, icon, title, subtitle } = props;
  return (
    <IonCard routerLink={href}>
      <IonCardContent>
        <IonItem className="ion-no-padding" lines="none">
          <IonIcon className="icon" icon={icon} slot="start" size="large" />
          <div className="landing-page-card-text">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>

          <IonIcon icon={chevronForward} slot="end" />
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

const LandingPage: VFC = () => (
  <IonPage>
    <HeaderLanding
      title="Hello $Name"
      subtitle="What would you like to do today?"
    />

    <IonContent className="landing-base__">
      <IonList>
        <LandingPageCard
          href={newProfilePath}
          title="Add a person"
          subtitle="Create a new profile for a person"
          icon={personAddOutline}
        />
        <LandingPageCard
          href={profilesPath}
          title="View people and measurements"
          subtitle="View existing profiles in order to add and edit measurements"
          icon={peopleOutline}
        />
        <LandingPageCard
          href={printDevicePath}
          title="Print prosthetic device"
          subtitle="Generate an STL file to send to a 3D printer"
          icon={printOutline}
        />
        <LandingPageCard
          href={devicesPath}
          title="View previous prosthetic devices"
          subtitle="View STL files you created in the past"
          icon={handLeftOutline}
        />
      </IonList>
    </IonContent>
  </IonPage>
);
export default LandingPage;
