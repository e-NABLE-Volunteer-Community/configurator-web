import { VFC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "./measurement-input.tsx";
import "./measurements-form.css";
import MeasurementFormInput from "./measurement-input";
import {
  useViewMeasurements,
  useViewMeasurementsAlwaysUpdate,
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
import SubmitItemComponent from "./Submit/submit-item";
import { ViewMeasurement } from "../../../core/view-measurement-types";
import { viewMeasurementsAreAllValid } from "./validation";

const SubmitSlideBody: VFC = () => {
  const viewMeasurements = useViewMeasurementsAlwaysUpdate();
  const saveMeasurements = () =>
    console.log("Save Measurement Here", viewMeasurements);

  const canSubmit = viewMeasurementsAreAllValid(viewMeasurements);
  console.log({ canSubmit });

  return (
    <SwiperSlide>
      <IonContent>
        <IonCard className="card">
          <IonCardHeader>
            <IonCardTitle>All Done?</IonCardTitle>
            <IonCardSubtitle>Please review your measurements</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className="submit-card">
            <div className="card-content-container">
              <div className="review-results-container">
                {viewMeasurements.map((input, formIndex) => (
                  <div key={formIndex.toString() + "child"}>
                    {input.inputs.map((input, inputIndex) => (
                      <SubmitItemComponent
                        formIndex={formIndex}
                        inputIndex={inputIndex}
                        key={`${formIndex.toString()}-${inputIndex.toString()}-child`}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="submit-button-container">
                <IonButton
                  className="submit-button"
                  onClick={saveMeasurements}
                  disabled={!canSubmit}
                >
                  Save Measurements
                </IonButton>
              </div>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </SwiperSlide>
  );
};

const InputSlideBody: VFC<{ viewMeasurement: ViewMeasurement; index: number }> =
  ({ viewMeasurement, index }) => (
    <IonContent>
      <IonCard className="card">
        <IonCardHeader>
          <IonCardTitle>{viewMeasurement.measurementName}</IonCardTitle>
          {viewMeasurement.image?.imagePath && (
            <>
              <div className="image-container">
                <img src={viewMeasurement.image.imagePath} />
              </div>{" "}
              {viewMeasurement.image.imageText && (
                <IonCardSubtitle>
                  {viewMeasurement.image.imageText}
                </IonCardSubtitle>
              )}
            </>
          )}
        </IonCardHeader>
        <IonCardContent>
          <div className="slide">
            <MeasurementFormInput
              input={viewMeasurement.inputs}
              index={index}
            />
          </div>
        </IonCardContent>
      </IonCard>
    </IonContent>
  );

const NewMeasurements: VFC = () => {
  const viewMeasurements = useViewMeasurements();

  // TODO: Loading spinner
  if (isLoading(viewMeasurements)) return <div>loading...</div>;

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => void {}}
      onSwiper={() => void {}}
      className="base-container"
    >
      {viewMeasurements.map((viewMeasurement, index) => (
        <SwiperSlide key={viewMeasurement.measurementName}>
          <InputSlideBody viewMeasurement={viewMeasurement} index={index} />
        </SwiperSlide>
      ))}
      <SwiperSlide key="submit">
        <SubmitSlideBody />
      </SwiperSlide>
    </Swiper>
  );
};
export default NewMeasurements;
