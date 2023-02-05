let object = {
  id() {
    return this.ar.sort((a, b) => {
      return a - b;
    });
  },
  name: "yurii",
  work: false,
  ar: [1, 4, 6],
  obj: { a: 1, a2: 2 },
  c: 1000_000,
};

let obj = { ...object };
let {
  name: myName = 0,
  obj: { a2 },
  ar: [a11, ...tail2] = [],
  ...tail
} = obj || {};
myName;
console.log();
a11;
tail2;
let ar, c;
({ ar, c } = obj);
ar;
c;
