// 383. Ransom Note

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const object = {};
  const ransomNoteArray = ransomNote.split("");
  const magazineArray = magazine.split("");

  for (const m of magazineArray) {
    if (!object[m]) {
      object[m] = 1;
    } else {
      object[m] += 1;
    }
  }

  for (const r of ransomNoteArray) {
    if (!object[r]) return false;
    object[r] -= 1;
  }

  return Object.values(object).every((item) => item >= 0);
};
