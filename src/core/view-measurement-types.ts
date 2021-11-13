export type ViewMeasurement = {
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

export interface SliderInput {
  inputType: InputTypes.Slider;
  labelText: string;
  inputRange: Range;
  value: number;
  units: string;
}

export interface NumericInput {
  inputType: InputTypes.Numeric;
  labelText: string;
  inputRange: Range;
  value: number;
  units: string;
}

export interface TextInput {
  inputType: InputTypes.Text;
  labelText: string;
  value: string;
}

export interface Range {
  upperBound: number;
  lowerBound: number;
}

export const DEFAULT_MEASUREMENTS: ViewMeasurement[] = [
  {
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
    image: {
      imagePath: "elbowToWrist.jpg",
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
          upperBound: 15,
          lowerBound: 0,
        },
        value: 0,
        units: "cm",
      },
    ],
  },
  {
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
