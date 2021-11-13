import {
  ReactElement,
  JSXElementConstructor,
  ReactNodeArray,
  ReactPortal,
  VFC,
} from "react";
import { ViewImage } from "../../../core/view-measurement-types";

import "./image.css";
type MeasurementImageProps = { input: ViewImage };
const MeasurementImage: VFC<ViewImage> = (props) => {
  return (
    <div className="base-image-container">
      <div className="image-container">{props.imagePath}</div>
      <div className="image-text">{props.imageText}</div>
    </div>
  );
};
export default MeasurementImage;
