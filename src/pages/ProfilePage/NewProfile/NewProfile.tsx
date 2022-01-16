import { useState, VFC } from "react";
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
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Profile } from "../../../core/profile-types";
import { Swiper, SwiperSlide } from "swiper/react";
import SubmitItemComponent from "../../MeasurementsPage/NewMeasurements/Submit/submit-item";
import "./new-profile.scss";
import Header from "../../../components/header/header";

const NewProfile: VFC = () => {
  const newProfile: Partial<Profile> = {};

  return (
    <IonContent>
      <Header title="Create New Profile" backUrl="/"></Header>
      <div className="swiper-container">
        <NewProfileSwiper></NewProfileSwiper>
      </div>
    </IonContent>
  );
};

const NewProfileSwiper: VFC = () => {
  const [selectedSex, setSelectedSex] = useState<string>("other");
  return (
    <IonContent className="swiper-container">
      <Swiper>
        <SwiperSlide className="swiper-center">
          <IonCard className="card">
            <IonCardTitle className="card-title">
              Who are you creating a profile for?
            </IonCardTitle>
            <div className="card-inputs">
              <div className="input-item">
                <IonItem>
                  <IonLabel>First Name:</IonLabel>

                  <IonInput></IonInput>
                </IonItem>
              </div>
              <div className="input-item">
                <IonItem>
                  <IonLabel>Last name:</IonLabel>

                  <IonInput></IonInput>
                </IonItem>
              </div>
            </div>
          </IonCard>
        </SwiperSlide>
        <SwiperSlide className="swiper-center">
          <IonCard className="card">
            <IonCardHeader>
              <IonCardTitle>What is $name's sex?</IonCardTitle>
            </IonCardHeader>
            <IonList className="radio-list">
              <IonRadioGroup
                value={selectedSex}
                onIonChange={(e) => setSelectedSex(e.detail.value)}
                className="radio-list"
              >
                <div className="card-inputs">
                  <div className="input-item">
                    <IonItem>
                      <IonLabel>Male</IonLabel>
                      <IonRadio slot="start" value="male" />
                    </IonItem>
                  </div>
                  <div className="input-item">
                    <IonItem>
                      <IonLabel>Female</IonLabel>
                      <IonRadio slot="start" value="female" />
                    </IonItem>
                  </div>
                  <div className="input-item">
                    <IonItem>
                      <IonLabel>Other/Prefer not to say</IonLabel>
                      <IonRadio slot="start" value="other" />
                    </IonItem>
                  </div>
                </div>
              </IonRadioGroup>
            </IonList>
          </IonCard>
        </SwiperSlide>
        <SwiperSlide className="swiper-center">
          <IonCard className="card">
            <IonCardHeader>
              <IonCardTitle>When was $name born?</IonCardTitle>
            </IonCardHeader>
            <IonCardContent></IonCardContent>
          </IonCard>
        </SwiperSlide>
        <SwiperSlide className="swiper-center">
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
        </SwiperSlide>
      </Swiper>
    </IonContent>
  );
};
export default NewProfile;
