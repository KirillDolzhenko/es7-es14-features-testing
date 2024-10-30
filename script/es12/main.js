console.log("== ES 12 ==");

let a = {
  name: undefined,
};

a.name ??= "Kirill";

console.log(a);

a.name ??= "Vlad";

console.log(a);

//

a.name &&= "Vlad";

console.log(a);

//

let number = 1_000_000;

console.log(number);
