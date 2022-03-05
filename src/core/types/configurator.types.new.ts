import { DeviceId } from "./bill-of-materials.types.new";

export type MeasurementSetId = string;

export type ConfigurationSetId = number;

export type MeasurementSet = ConfigurationSet;
export type OptionSet = ConfigurationSet & {
  device: DeviceId;
};

export type ConfigurationSet = {
  id: ConfigurationSetId;
  image?: string;
  description: ConfigurationSetDescription;
  createdAt: Date;
  modifiedAt: Date;
  configurations: Configuration[];
};

export type SerializedJSON = string;

export type ConfigurationId = number;
export type Configuration = {
  id: ConfigurationId;
  descriptionId: ConfigurationDescriptionId;
  value: SerializedJSON;
};

export type MeasurementSetDescriptionId = number;
export type MeasurementSetDescription = {
  id: MeasurementSetDescriptionId;
};

export type Measurement = Configuration;

export type ConfigurationSetDescriptionId = number;
export type ConfigurationSetDescription = {
  id: ConfigurationSetDescriptionId;
  image?: string;
  name: string;
  description?: string;
  configurations: ConfigurationDescription[];
};

export enum ConfigurationKind {
  Numeric = "NUMERIC",
  Boolean = "BOOLEAN",
  SingleOption = "SINGLE_OPTION",
  MultipleOption = "MULTIPLE_OPTION",
}

export type ConfigurationDescriptionId = number;
interface BaseConfigurationDescription {
  id: ConfigurationDescriptionId;
  kind: ConfigurationKind;
  image?: string;
  name: string;
  description?: string;
}

export type ConfigurationDescription =
  | BooleanConfigurationDescription
  | NumericConfigurationDescription
  | SingleOptionConfigurationDescription
  | MultipleOptionConfigurationDescription;

export type BooleanConfigurationDescription = BaseConfigurationDescription & {
  kind: ConfigurationKind.Boolean;
};
export type NumericConfigurationDescription = BaseConfigurationDescription & {
  kind: ConfigurationKind.Numeric;
  units: string;
};

export type SingleOptionConfigurationDescription =
  BaseConfigurationDescription & {
    kind: ConfigurationKind.SingleOption;
    options?: ConfigurationOptions;
  };
export type MultipleOptionConfigurationDescription =
  BaseConfigurationDescription & {
    kind: ConfigurationKind.MultipleOption;
    options?: ConfigurationOptions;
  };

export type ConfigurationOptions = Record<string, string>;
