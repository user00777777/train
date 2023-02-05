let num = [100, 3, 2];
let copyNum = [...num];
let basketObj1 = [
  { id: 1, word: "ok", bool: false },
  { id: 2, word: "ok2", bool: true },
  { id: 3, word: "ok3", bool: false },
];
// let result = copyNum.forEach((el, i, ar) => (ar[i] = el * 2));
// result;
// copyNum;
// let resultMap = basketObj1.map((el) => el.id ** 2);

// let resultMap1 = basketObj1.map((el) => ({ e: el.word }));
// resultMap1;
// console.log(resultMap);
let bObj = copyNum.filter((el) => el > 4);
function count(n) {
  return n.reduce((acc, el) => acc + el.id, 0);
}
console.log(count(basketObj1));
