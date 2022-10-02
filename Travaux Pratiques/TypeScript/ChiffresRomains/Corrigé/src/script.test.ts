const script = require('./script');

test("Digit to Roman", () => {
  expect(script.digitalToRoman(1)).toBe("I");
  expect(script.digitalToRoman(4)).toBe("IV");
  expect(script.digitalToRoman(10)).toBe("X");
  expect(script.digitalToRoman(19)).toBe("XIX");
  expect(script.digitalToRoman(21)).toBe("XXI");
  expect(script.digitalToRoman(1452)).toBe("MCDLII");
});

describe("test getSuccessiveNumbers", () => {
  it("Romanto Digit", () => {
    expect(script.romanToDigital("I")).toBe(1);
    expect(script.romanToDigital("IV")).toBe(4);
    expect(script.romanToDigital("XIX")).toBe(19);
    expect(script.romanToDigital("IIC")).toBe(98);
    expect(script.romanToDigital("MCDLII")).toBe(1452);
  });
});