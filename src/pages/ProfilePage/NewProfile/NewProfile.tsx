import { VFC } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Profile } from "../../../core/profile-types";
import { Swiper, SwiperSlide } from "swiper/react";
import SubmitItemComponent from "../../MeasurementsPage/NewMeasurements/Submit/submit-item";
import "./new-profile.scss";

const NewProfile: VFC = () => {
  const newProfile: Partial<Profile> = {};

  return (
    <div>
      <IonHeader>
        <IonToolbar>
          <IonTitle>New Profile</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/profiles" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <NewProfileSwiper></NewProfileSwiper>
    </div>
  );
};

const NewProfileSwiper: VFC = () => {
  return (
    <Swiper>
      <div className="card">123</div>
      <SwiperSlide>
        <IonContent>
          <IonCard className="card">
            <IonCardHeader>
              <IonCardTitle>All Done?</IonCardTitle>
              <IonCardSubtitle>Please review your measurements</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent className="submit-card">
              <div className="card-content-container">
                <div className="submit-button-container">
                  <IonButton className="submit-button">
                    Save Measurements
                  </IonButton>
                </div>
              </div>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </SwiperSlide>
    </Swiper>
  );
};
export default NewProfile;
