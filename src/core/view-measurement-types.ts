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
    measurementName: "patientName",
    image: {
      imagePath: "patient-name.jpg",
      imageText: "Enter Patient Name",
    },
    inputs: [
      {
        inputType: InputTypes.Text,
        labelText: "INputLabel2",
        value: "",
      },
    ],
  },
  {
    measurementName: "elbowToWrist",
    image: {
      imagePath: "elbowToWrist.jpg",
      imageText: "Measure the length from elbow to wrist",
    },
    inputs: [
      {
        inputType: InputTypes.Slider,
        labelText: "INputLabel1",
        inputRange: {
          upperBound: 5,
          lowerBound: 0,
        },
        value: 0,
        units: "cm",
      },
      {
        inputType: InputTypes.Numeric,
        labelText: "INputLabel2",
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
    measurementName: "forearmCircumference",
    image: {
      imagePath: "forearm-circumference.jpg",
      imageText: "forearmcircumference",
    },
    inputs: [
      {
        inputType: InputTypes.Numeric,
        labelText: "INputLabel1",
        inputRange: {
          upperBound: 5,
          lowerBound: 0,
        },
        value: 0,
        units: "cm",
      },
      {
        inputType: InputTypes.Numeric,
        labelText: "INputLabel2",
        inputRange: {
          upperBound: 5,
          lowerBound: 0,
        },
        value: 0,
        units: "mm",
      },
    ],
  },
  {
    measurementName: "updateLater",
    image: {
      imagePath: "updateLater.jpg",
      imageText: "Measure the length from elbow to wrist",
    },
    inputs: [
      {
        inputType: InputTypes.Numeric,
        labelText: "INputLabel1",
        inputRange: {
          upperBound: 5,
          lowerBound: 0,
        },
        value: 0,
        units: "cm",
      },
      {
        inputType: InputTypes.Numeric,
        labelText: "INputLabel2",
        inputRange: {
          upperBound: 5,
          lowerBound: 0,
        },
        value: 0,
        units: "mm",
      },
      {
        inputType: InputTypes.Text,
        labelText: "INputLabel3",
        value: "",
      },
    ],
  },
];
