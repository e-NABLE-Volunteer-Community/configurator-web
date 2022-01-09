export type MeasurementSetId = string;
export enum MeasurementSetType {
  fingers = "fingers",
  hand = "hand",
  elbow = "elbow",
  shoulder = "shoulder",
}
export type MeasurementSet = {
  id: MeasurementSetId;
  name: string;
  type: MeasurementSetType;
  createdAt: Date;
  modifiedAt: Date;
};

export interface FingersMeasurements extends MeasurementSet {
  type: MeasurementSetType.fingers;
  data: {
    wristCircumference: number;
    baseOfHandToTipOfMiddleFinger: number;
  };
}

export interface HandMeasurements extends MeasurementSet {
  type: MeasurementSetType.hand;
  data: {
    wristCircumference: string;
    baseOfHandToTipOfMiddleFinger: number;
  };
}

export interface ElbowMeasurements extends MeasurementSet {
  type: MeasurementSetType.elbow;
  data: {
    wristCircumference: string;
    baseOfHandToTipOfMiddleFinger: number;
  };
}

export function isElbowMeasurements(
  measurements: MeasurementSet
): measurements is ElbowMeasurements {
  return measurements.type === MeasurementSetType.elbow;
}

export interface ShoulderMeasurements extends MeasurementSet {
  type: MeasurementSetType.shoulder;
  data: {
    wristCircumference: string;
    baseOfHandToTipOfMiddleFinger: number;
  };
}

export interface Measurement {}

export enum ArmMeasurementTypes {
  thumb = "thumb",
  indexFinger = "index finger",
  middleFinger = "middle finger",
  ringFinger = "ring finger",

  forearm = "forearm",
}

export enum MeasurementTypes {}
