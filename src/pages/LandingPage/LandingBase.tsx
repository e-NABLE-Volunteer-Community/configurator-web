import { VFC } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
} from "@ionic/react";
import { IfMobile, IfNotMobile } from "../../components/responsive/breakpoints";
import "../../components/header/header.scss";
import "../LandingPage/landing-base.scss";
import {
  arrowBackOutline,
  funnelOutline,
  filterCircleOutline,
  personAddOutline,
  peopleOutline,
  printOutline,
  handLeftOutline,
} from "ionicons/icons";
import { useHistory } from "react-router";
import HeaderLanding from "../../components/header/header-landing";

const LandingBase: VFC = () => {
  const history = useHistory();
  const onClick = (url: string) => history.push(url);
  const newPerson = () => onClick("/profiles/new");
  const viewProfiles = () => onClick("/profiles");
  const printDevice = () => onClick("/print-device");
  const viewPreviousDevices = () => onClick("/devices");
  return (
    <>
      <HeaderLanding
        title="Hello $Name"
        subtitle="What would you like to do today?"
      ></HeaderLanding>

      <IonContent className="landing-base__">
        <IonList>
          <IonItem>
            <div className="landing-card" onClick={newPerson}>
              <div className="icon-container">
                <IonIcon className="icon" icon={personAddOutline}></IonIcon>
              </div>
              <div className="text-container">
                <div className="card-header-text">Add a new person</div>
                <div className="card-body-text">
                  Create a new profile for a person
                </div>
              </div>
            </div>
          </IonItem>
          <IonItem>
            <div className="landing-card" onClick={viewProfiles}>
              <div className="icon-container">
                <IonIcon className="icon" icon={peopleOutline}></IonIcon>
              </div>
              <div className="text-container">
                <div className="card-header-text">
                  View people and measurements
                </div>
                <div className="card-body-text">
                  View existing profiles in order to add and edit measurements
                </div>
              </div>
            </div>
          </IonItem>
          <IonItem>
            <div className="landing-card" onClick={printDevice}>
              <div className="icon-container">
                <IonIcon className="icon" icon={printOutline}></IonIcon>
              </div>
              <div className="text-container">
                <div className="card-header-text">Print prosthetic device</div>
                <div className="card-body-text">
                  Generate an STL file to send to a 3D printer
                </div>
              </div>
            </div>
          </IonItem>
          <IonItem>
            <div className="landing-card" onClick={viewPreviousDevices}>
              <div className="icon-container">
                <IonIcon className="icon" icon={handLeftOutline}></IonIcon>
              </div>
              <div className="text-container">
                <div className="card-header-text">
                  View previous prosthetic devices
                </div>
                <div className="card-body-text">
                  View STL files you created in the past
                </div>
              </div>
            </div>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};
export default LandingBase;
