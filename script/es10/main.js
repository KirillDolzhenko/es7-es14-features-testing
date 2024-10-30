console.log("== ES 10 ==");

let a = [1, 4, 5, [555, 555, ["fff", [555, 2, 5]]]];

console.log(a.flat(1));
console.log(a.flatMap((el, ind) => [el, `Index of previous ${ind}`]));

let dataObj = [
  ["lemon", "yellow"],
  ["banana", "yellow"],
  ["apple", "green/red"],
];

console.log(Object.fromEntries(dataObj));
