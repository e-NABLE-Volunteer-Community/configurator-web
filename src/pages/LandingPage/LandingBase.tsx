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

const LandingBase: VFC = () => {
  const history = useHistory();
  const onClick = (url: string) => history.push(url);
  const newPerson = () => onClick("/profiles/new");
  const viewProfiles = () => onClick("/profiles");
  const printDevice = () => onClick("/print-device");
  const viewPreviousDevices = () => onClick("/devices");
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
      <IonContent>
        <div className="list-container">
          <IonList
            lines="none"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
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
                  <div className="card-header-text">
                    Print prosthetic device
                  </div>
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
        </div>
      </IonContent>
    </>
  );
};
export default LandingBase;
