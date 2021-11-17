export type ViewMeasurement = {
  measurementName: string;
  image?: ViewImage;
  inputs: MeasurementInput[];
};

// TODO [Thysbe #3]: Image alt text
export type ViewImage = {
  imagePath: string;
  imageText: string;
};

export enum InputTypes {
  Numeric = "Numeric",
  Text = "Text",
}

export enum MeasurementUnits {
  Millimeters = "mm",
  Centimeters = "cm",
  Inches = "in",
  Degrees = "°",
}

export type MeasurementInput = NumericInput | TextInput;

export interface Input {
  inputType: InputTypes;
  labelText: string;
  value: number | string | null;
}

export interface NumericInput extends Input {
  inputType: InputTypes.Numeric;
  inputRange: Range;
  value: number | null;
  units: MeasurementUnits;
}

export const isNumericInput = (
  input: Omit<MeasurementInput, "value"> | MeasurementInput
): input is NumericInput => {
  return input.inputType === InputTypes.Numeric;
};

export interface TextInput extends Input {
  inputType: InputTypes.Text;
  value: string | null;
}

export interface Range {
  upperBound: number;
  lowerBound: number;
}

export const defaultMeasurements: ViewMeasurement[] = [
  {
    measurementName: "Recipient Name",
    image: {
      imagePath: "https://i.stack.imgur.com/34AD2.jpg",
      imageText: "Enter Recipient Name",
    },
    inputs: [
      {
        inputType: InputTypes.Text,
        labelText: "Recipient Name",
        value: null,
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
          lowerBound: 10,
        },
        value: null,
        units: MeasurementUnits.Centimeters,
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
          lowerBound: 1,
        },
        value: null,
        units: MeasurementUnits.Centimeters,
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
          lowerBound: 1,
        },
        value: null,
        units: MeasurementUnits.Centimeters,
      },
    ],
  },
];
