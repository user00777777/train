let num = [100, 3, 2, 23, 12, 5, 7, 23, 34, 29];
let copyNum = [...num];
let basketObj1 = [
  { id: 1, word: "ok", bool: false },
  { id: 2, word: "ok2", bool: true },
  { id: 3, word: "ok3", bool: false },
  { id: 100, word: "jeday", bool: true },
];
// let result = copyNum.forEach((el, i, ar) => (ar[i] = el * 2));
// result;
// copyNum;
// let resultMap = basketObj1.map((el) => el.id ** 2);

// let resultMap1 = basketObj1.map((el) => ({ e: el.word }));
// resultMap1;
// console.log(resultMap);
let bObj = copyNum.filter((el) => el > 4);
function count(n, instr) {
  return n.reduce((acc, el) => {
    if (el.bool) {
      acc.push(el.word);
    }
    return acc;
  }, []);
}
function countItem(ar) {
  return ar.reduce((acc, el) => {
    if (el < 23) {
      acc++;
    }
    return acc;
  }, 0);
}

// console.log(countItem(num));

// console.log(count(basketObj1, true));
// console.log(count(basketObj1, true));
