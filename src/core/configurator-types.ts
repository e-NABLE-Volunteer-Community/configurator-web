import { ProfileDevice } from "./onshape-types";

export type MeasurementSetId = string;
export enum MeasurementSetType {
  fingers = "fingers",
  hand = "hand",
  elbow = "elbow",
  shoulder = "shoulder",
  arm = "arm",
}
export type MeasurementSet = {
  id: MeasurementSetId;
  name: string;
  type: MeasurementSetType;
  createdAt: Date;
  modifiedAt: Date;
  data: Measurement[];
  associatedDevices: ProfileDevice[];
};

export interface ArmMeasurementSet extends MeasurementSet {
  type: MeasurementSetType.arm;
}

export type MeasurementId = string;
export interface Measurement {
  id: MeasurementId;
  type: MeasurementTypes;
  measurementTitle: string;
  data: number;
  units: string;
}

export enum MeasurementTypes {
  thumb = "thumb",
  indexFinger = "index finger",
  middleFinger = "middle finger",
  ringFinger = "ring finger",
  forearm = "forearm",
  palm = "palm",
  elbowCircumference = "elbowCircumference",
}

// export interface FingersMeasurements extends MeasurementSet {
//   type: MeasurementSetType.fingers;
//   data: {
//     wristCircumference: number;
//     baseOfHandToTipOfMiddleFinger: number;
//   };
// }

// export interface HandMeasurements extends MeasurementSet {
//   type: MeasurementSetType.hand;
//   data: {
//     wristCircumference: string;
//     baseOfHandToTipOfMiddleFinger: number;
//   };
// }

// export interface ElbowMeasurements extends MeasurementSet {
//   type: MeasurementSetType.elbow;
//   data: {
//     wristCircumference: string;
//     baseOfHandToTipOfMiddleFinger: number;
//   };
// }

// export function isElbowMeasurements(
//   measurements: MeasurementSet
// ): measurements is ElbowMeasurements {
//   return measurements.type === MeasurementSetType.elbow;
// }

// export interface ShoulderMeasurements extends MeasurementSet {
//   type: MeasurementSetType.shoulder;
//   data: {
//     wristCircumference: string;
//     baseOfHandToTipOfMiddleFinger: number;
//   };
// }
