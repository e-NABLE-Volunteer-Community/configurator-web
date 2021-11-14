import { VFC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "./measurement-input.tsx";
import "./measurements-form.css";

import { withRouter } from "react-router";
import {
  ViewMeasurement,
  DEFAULT_MEASUREMENTS,
} from "../../../core/view-measurement-types";
import MeasurementFormInput from "./measurement-input";
import MeasurementImage from "./image";
import { createViewMeasurementsSlice } from "../../../core/stores/view-measurements";
import { useViewMeasurements } from "../../../core/stores/app";
import { isLoading } from "../../../core/stores/utils";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
} from "@ionic/react";
import { Subject } from "rxjs";

type MeasurementFormProps = { input: ViewMeasurement[] };
const MeasurementFormParent: VFC<MeasurementFormProps> = (props) => {
  const viewMeasurement = useViewMeasurements();
  const slideChangeSubject = new Subject<void>();

  if (isLoading(viewMeasurement)) {
    return <div>loading...</div>;
  }
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="base-container"
    >
      {viewMeasurement.map(function (input, index) {
        return (
          <SwiperSlide key={input.measurementName}>
            <IonContent>
              <IonCard className="card">
                <IonCardHeader>
                  <IonCardTitle>{input.measurementName}</IonCardTitle>
                  <div className="image-container">
                    <img src={input.image.imagePath} />
                  </div>

                  <IonCardSubtitle>{input.image.imageText}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <div className="slide">
                    {/* <MeasurementImage {...input.image}></MeasurementImage> */}
                    <MeasurementFormInput
                      input={input.inputs}
                      index={index}
                      slideChangeSubject={slideChangeSubject}
                    ></MeasurementFormInput>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonContent>
          </SwiperSlide>
        );
      })}
      <SwiperSlide>
        <IonContent>
          <IonCard className="card">
            <IonCardHeader>All Done?</IonCardHeader>
            <IonCardContent>
              {viewMeasurement.map(function (input, index) {
                return (
                  <div>
                    {input.inputs.map(function (input, index) {
                      return (
                        <div>
                          {input.labelText}: {input.value}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
              <IonButton onClick={() => console.log(viewMeasurement)}>
                Save Measurements
              </IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </SwiperSlide>
    </Swiper>
  );
};
export default MeasurementFormParent;
