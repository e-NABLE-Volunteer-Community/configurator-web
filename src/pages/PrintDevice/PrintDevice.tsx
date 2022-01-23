import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { VFC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollHeader from "../../components/header/scroll-header";

const PrintDevice: VFC = () => {
  return (
    <IonContent>
      <ScrollHeader backUrl="/home" />
      <PrintDeviceSwiper></PrintDeviceSwiper>
    </IonContent>
  );
};

const PrintDeviceSwiper: VFC = () => {
  return (
    <IonContent className="swiper-inner-container">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="swiper-center">
          <IonCard className="card">
            <IonCardHeader>
              <IonCardTitle>Who are you creating a profile for?</IonCardTitle>
            </IonCardHeader>
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
      </Swiper>
    </IonContent>
  );
};

export default PrintDevice;
