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
import {
  useViewMeasurements,
  useViewMeasurementsFor,
} from "../../../core/stores/app";
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
import SubmitItemComponent from "./Submit/submit-item";

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
      onSlideChange={() => void {}}
      onSwiper={() => void {}}
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
                var formIndex = index;
                return (
                  <div key={formIndex.toString() + "child"}>
                    {input.inputs.map(function (input, index) {
                      var inputIndex = index;
                      return (
                        <SubmitItemComponent
                          formIndex={formIndex}
                          inputIndex={inputIndex}
                          key={
                            formIndex.toString() +
                            "-" +
                            inputIndex.toString() +
                            "-" +
                            "child"
                          }
                        ></SubmitItemComponent>
                      );
                    })}
                  </div>
                );
              })}
              <IonButton
                onClick={() =>
                  console.log("Save Measurement Here", viewMeasurement)
                }
              >
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
