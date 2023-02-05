let arr = [1, 3, 5, 8, 9];
let arr2 = [1, 3, 5, 8, 9];
let newar = [...arr, ...arr2];
newar;
let [one = 0, ...last] = arr || []; //Сщ значения ми по умолчанию
one;
last;

let h1 = document.querySelector(".h1");
