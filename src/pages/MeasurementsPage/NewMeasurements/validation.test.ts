import {
  InputTypes,
  MeasurementUnits,
  NumericInput,
  TextInput,
  ViewMeasurement,
} from "../../../core/view-measurement-types";
import {
  checkNumericValue,
  inputIsValid,
  viewMeasurementsAreAllValid,
} from "./validation";

const numericInput: NumericInput = {
  labelText: "Label",
  inputType: InputTypes.Numeric,
  inputRange: {
    lowerBound: 1.5,
    upperBound: 12,
  },
  value: null,
  units: MeasurementUnits.Millimeters,
};

const textInput: TextInput = {
  labelText: "Label",
  inputType: InputTypes.Text,
  value: null,
};

describe("numeric", () => {
  const input = numericInput;

  describe("checkNumericValue", () => {
    it("Returns NaN for non-numbers", () => {
      expect(checkNumericValue("hello", input)).toEqual([0, "NaN"]);
      expect(checkNumericValue("one", input)).toEqual([0, "NaN"]);
      expect(checkNumericValue(null, input)).toEqual([0, "NaN"]);
    });

    it("Returns above_upper if value is above upper bound", () => {
      expect(checkNumericValue("13", input)).toEqual([13, "above_upper"]);
      expect(checkNumericValue("12.1", input)).toEqual([12.1, "above_upper"]);
    });

    it("Returns below_lower if value is below lower bound", () => {
      expect(checkNumericValue("1", input)).toEqual([1, "below_lower"]);
      expect(checkNumericValue("1.4", input)).toEqual([1.4, "below_lower"]);
    });

    it("Returns parsed and undefined if value is valid", () => {
      expect(checkNumericValue("1.5", input)).toEqual([1.5, undefined]);
      expect(checkNumericValue("7", input)).toEqual([7, undefined]);
      expect(checkNumericValue("12", input)).toEqual([12, undefined]);
    });
  });

  describe("inputIsValid", () => {
    it("Returns false if there is a problem with a number input", () => {
      expect(inputIsValid({ ...input, value: null })).toBe(false);
      expect(inputIsValid({ ...input, value: 1 })).toBe(false);
      expect(inputIsValid({ ...input, value: 18 })).toBe(false);
    });

    it("Returns true if there is no problem with a number input", () => {
      expect(inputIsValid({ ...input, value: 8 })).toBe(true);
    });
  });
});

describe("text", () => {
  const input = textInput;

  describe("inputIsValid", () => {
    it("Returns false if there is a problem with a text input", () => {
      expect(inputIsValid({ ...input, value: null })).toBe(false);
      expect(inputIsValid({ ...input, value: "" })).toBe(false);
    });

    it("Returns true if there is no problem with a text input", () => {
      expect(inputIsValid({ ...input, value: "Hello!" })).toBe(true);
    });
  });
});

describe("viewMeasurementsAreAllValid", () => {
  const invalid1: ViewMeasurement[] = [
    { measurementName: "numeric", inputs: [numericInput] },
    { measurementName: "text", inputs: [textInput] },
  ];
  const invalid2: ViewMeasurement[] = [
    { measurementName: "numeric", inputs: [{ ...numericInput, value: 7 }] },
    { measurementName: "text", inputs: [textInput] },
  ];
  const invalid3: ViewMeasurement[] = [
    { measurementName: "numeric", inputs: [numericInput] },
    { measurementName: "text", inputs: [{ ...textInput, value: "Hello!" }] },
  ];
  const valid: ViewMeasurement[] = [
    { measurementName: "numeric", inputs: [{ ...numericInput, value: 7 }] },
    { measurementName: "text", inputs: [{ ...textInput, value: "Hello!" }] },
  ];

  it("Returns false if the view measurements are not all valid", () => {
    expect(viewMeasurementsAreAllValid(invalid1)).toBe(false);
    expect(viewMeasurementsAreAllValid(invalid2)).toBe(false);
    expect(viewMeasurementsAreAllValid(invalid3)).toBe(false);
  });

  it("Returns true if the view measurements are all valid", () => {
    expect(viewMeasurementsAreAllValid(valid)).toBe(true);
  });
});
