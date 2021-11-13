export type MeasurementSetId = string;
export enum MeasurementsType {
  fingers = "fingers",
  hand = "hand",
  elbow = "elbow",
  shoulder = "shoulder",
}
export type MeasurementSet = {
  id: MeasurementSetId;
  name: string;
  type: MeasurementsType;
  createdAt: Date;
  modifiedAt: Date;
};

export interface FingersMeasurements extends MeasurementSet {
  type: MeasurementsType.fingers;
  data: {
    wristCircumference: number;
    baseOfHandToTipOfMiddleFinger: number;
  };
}

export interface HandMeasurements extends MeasurementSet {
  type: MeasurementsType.hand;
  data: {
    wristCircumference: string;
    baseOfHandToTipOfMiddleFinger: number;
  };
}

export interface ElbowMeasurements extends MeasurementSet {
  type: MeasurementsType.elbow;
  data: {
    wristCircumference: string;
    baseOfHandToTipOfMiddleFinger: number;
  };
}

export interface ShoulderMeasurements extends MeasurementSet {
  type: MeasurementsType.shoulder;
  data: {
    wristCircumference: string;
    baseOfHandToTipOfMiddleFinger: number;
  };
}
