const romanNumbersDico = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000]
]);

const romanAssignationArray: [number, string][] = [
  [1, "I"],
  [4, "IV"],
  [5, "V"],
  [9, "IX"],
  [10, "X"],
  [40, "XL"],
  [50, "L"],
  [90, "XC"],
  [100, "C"],
  [400, "CD"],
  [500, "D"],
  [900, "CM"],
  [1000, "M"]
];


/**
 * Transformation de chiffres romains en chiffres arabes
 * @param romanNumber chiffres romains
 * @returns chiffres arabes
 */
function romanToDigital(romanNumber: string) {
  const chars = [...romanNumber];
  let maxCharValue = 0;
  let resultValue = 0;

  for(let i=chars.length-1; i>=0; --i)
  {
    const currentCharValue = getCharValue(chars[i]);

    if (maxCharValue <= currentCharValue)
    {
      resultValue += currentCharValue;
      maxCharValue = currentCharValue;
    }
    else
    {
      resultValue -= currentCharValue;
    }
  }

  return resultValue;

  function getCharValue(char: string) {
    let charValue = romanNumbersDico.get(char);
    if (charValue == null)
      throw Error(`Le caractère '${char}' ne fait pas partie des chiffres romains!`);
    return charValue;
  }
}

/**
 * Transformation de chiffres arabes en chiffres romains
 * @param number chiffres arabes
 * @returns chiffres romains
 */
function digitalToRoman(number : number)
{
  let romanNumber = "";
  
  for (let i = romanAssignationArray.length - 1; i >= 0; --i)
  {
    const [currentRomanVal, currentRomanStr] = romanAssignationArray[i];
    let nbValue = Math.floor(number / currentRomanVal);
    number %= currentRomanVal;

    if (nbValue > 0)
      romanNumber += currentRomanStr.repeat(nbValue);
  }

  return romanNumber;
}

module.exports = {
  romanToDigital,
  digitalToRoman
};