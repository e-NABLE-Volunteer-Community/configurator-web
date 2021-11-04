import { VFC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  IonButton,
  IonButtons,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";

export const NewMeasurements: VFC = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <form className="ion-padding">
          <IonImg src="https://jewelryjealousy.com/wp-content/uploads/2019/09/measuring-wrist-size-with-paper-or-string.jpg" />
          <IonItem>
            <IonLabel position="floating">Wrist Circumference (cm)</IonLabel>
            <IonInput />
          </IonItem>
          <IonButtons>
            <IonButton>Next</IonButton>
          </IonButtons>
        </form>
      </SwiperSlide>
      <SwiperSlide>
        <form className="ion-padding">
          <IonItem>
            <IonLabel position="floating">Other Measurement (mm)</IonLabel>
            <IonInput />
          </IonItem>
          <IonButtons>
            <IonButton>Prev</IonButton>
            <IonButton>Next</IonButton>
          </IonButtons>
        </form>
      </SwiperSlide>
    </Swiper>
  );
};
