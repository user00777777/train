let object = {
  id: () => {
    console.log(11);
  },
  name: "yurii",
  work: false,
};

let obj = { ...object };
let { name: myName } = obj || {};
myName;
