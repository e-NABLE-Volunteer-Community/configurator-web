export type ViewMeasurement = {
  measurementName: string;
  image: ViewImage;
  inputs: MeasurementInput[];
};

export type ViewImage = {
  imagePath: string;
  imageText: string;
};

export enum InputTypes {
  Slider = "Slider",
  Numeric = "Numeric",
  Text = "Text",
}

export type MeasurementInput = SliderInput | NumericInput | TextInput;

export interface Input {
  inputType: InputTypes;
  labelText: string;
  value: number | string;
}

export interface SliderInput extends Input {
  inputType: InputTypes.Slider;
  inputRange: Range;
  value: number;
  units: string;
}

export interface NumericInput extends Input {
  inputType: InputTypes.Numeric;
  inputRange: Range;
  value: number;
  units: string;
}

export interface TextInput extends Input {
  inputType: InputTypes.Text;
  value: string;
}

export interface Range {
  upperBound: number;
  lowerBound: number;
}

export const DEFAULT_MEASUREMENTS: ViewMeasurement[] = [
  {
    measurementName: "Patient Name",
    image: {
      imagePath: "https://i.stack.imgur.com/34AD2.jpg",
      imageText: "Enter Patient Name",
    },
    inputs: [
      {
        inputType: InputTypes.Text,
        labelText: "Patient Name",
        value: "",
      },
    ],
  },
  {
    measurementName: "Elbow to Wrist",
    image: {
      imagePath:
        "https://www.researchgate.net/profile/S-Manimala/publication/322096696/figure/fig4/AS:670436299915276@1536855878228/Distance-between-middle-finger-tip-and-elbow-as-shown-in-figure-2-Label-5-in-figure-2.jpg",
      imageText: "Measure the length from elbow to wrist",
    },
    inputs: [
      {
        inputType: InputTypes.Numeric,
        labelText: "Elbow to Wrist",
        inputRange: {
          upperBound: 15,
          lowerBound: 0,
        },
        value: 0,
        units: "cm",
      },
    ],
  },
  {
    measurementName: "Forearm Circumference",
    image: {
      imagePath:
        "https://cdn.shopify.com/s/files/1/0083/4306/0598/files/IMG_6797_large.JPG?v=1539371133",
      imageText: "Measure distance around the forearm 3 inches below the wrist",
    },
    inputs: [
      {
        inputType: InputTypes.Numeric,
        labelText: "Forearm Circumference",
        inputRange: {
          upperBound: 5,
          lowerBound: 0,
        },
        value: 0,
        units: "cm",
      },
    ],
  },
  {
    measurementName: "Shoulder to Elbow",
    image: {
      imagePath:
        "https://customstyle.files.wordpress.com/2012/04/upper-arm-measurement.jpg",
      imageText: "Measure the length from the top of the shoulder to the elbow",
    },
    inputs: [
      {
        inputType: InputTypes.Numeric,
        labelText: "Shoulder to Elbow",
        inputRange: {
          upperBound: 5,
          lowerBound: 0,
        },
        value: 0,
        units: "cm",
      },
    ],
  },
];
