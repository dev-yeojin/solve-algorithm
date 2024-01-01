// const array1 = ["", "M", "MM", "MMM"];
// const array2 = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
// const array3 = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
// const array4 = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
// const fourLetterNumber = {
//   DCCC: 800,
//   LXXX: 80,
//   VIII: 8,
// };
// const threeLetterNumber = {
//   DCC: 700,
//   LXX: 70,
//   VII: 7,
// };
// const twoLetterNumer = {
//   CD: 400,
//   XL: 40,
//   IV: 4,
//   DC: 600,
//   LX: 60,
//   VI: 6,
//   CM: 900,
//   XC: 90,
//   IX: 9,
// };
// const oneLetterNumber = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };
// var romanToInt = function (s) {
//   const len = s.length;
//   let sum = 0;
//   for (let i = 0; i < len; ) {
//     if (Object.keys(fourLetterNumber).includes(s.substring(i, i + 4))) {
//       sum += fourLetterNumber[s.substring(i, i + 4)];
//       s.substring(i + 4);
//       i += 4;
//       continue;
//     } else if (Object.keys(threeLetterNumber).includes(s.substring(i, i + 3))) {
//       sum += threeLetterNumber[s.substring(i, i + 3)];
//       s.substring(i + 3);
//       i += 3;
//       continue;
//     } else if (Object.keys(twoLetterNumer).includes(s.substring(i, i + 2))) {
//       sum += twoLetterNumer[s.substring(i, i + 2)];
//       s.substring(i + 2);
//       i += 2;
//       continue;
//     } else {
//       sum += oneLetterNumber[s[i]];
//       s.substring(i + 1);
//       i += 1;
//       continue;
//     }
//   }
//   return sum;
// };

const romanNumber = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
};
const romanToInt = (s) => {
    let sum = 0;
    const len = s.length;
    for(let i=0; i<len;i++) {
        const current = romanNumber[s[i]];
        const next = i+1 < len-1 ? romanNumber[s[i+1]]: null;

        if (current < next) {
            sum += next - current;
            i++;
        } else {
            sum += current;
        }
    }
    return sum;
}

console.log(romanToInt("MCMXCIV"));
