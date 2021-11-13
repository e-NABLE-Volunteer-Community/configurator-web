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
import { IonButton } from "@ionic/react";
type MeasurementFormProps = { input: ViewMeasurement[] };
const MeasurementFormParent: VFC<MeasurementFormProps> = (props) => {
  const viewMeasurement = useViewMeasurements();

  if (isLoading(viewMeasurement)) {
    return <div>loading...</div>;
  }
  return (
    <div className="base-container">
      <div className="inputs-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {viewMeasurement.map(function (input, index) {
            return (
              <SwiperSlide key={input.measurementName}>
                <div className="slide">
                  <MeasurementImage {...input.image}></MeasurementImage>
                  <MeasurementFormInput
                    input={input.inputs}
                    index={index}
                  ></MeasurementFormInput>
                </div>
              </SwiperSlide>
            );
          })}
          <SwiperSlide>
            SUBMIT
            <IonButton onClick={() => console.log(viewMeasurement)}></IonButton>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default MeasurementFormParent;
