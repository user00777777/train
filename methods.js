let basket = [1, 2, 4, 7, 882, 3];
let basketObj = [
  { id: 1, word: "ok", bool: false },
  { id: 2, word: "ok2", bool: true },
  { id: 3, word: "ok3", bool: false },
];
let arObj = [basketObj];

let ind = [...basket];
let ar12, ar1, iOf, iOf2, arobj2, find;
ar12 = ind.indexOf(2);
ar12;
ar1 = ind.includes(7);
ar1;
iOf = basket.indexOf(3);
iOf2 = basket.findIndex((el) => el == 7);
find = basketObj.find((el) => el.word === "ok2");
// console.log(find);

iOf2;
iOf;
