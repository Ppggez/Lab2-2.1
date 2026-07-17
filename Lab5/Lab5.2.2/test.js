{
  var x = 10; // A1
  if (x === 10) {
    var y = 100;
    console.log(y);
  }
  console.log(y);
}

{
  var x = 10; // A2
  if (x === 10) {
    var y = 100;
    console.log(y);
  }
  console.log(y);
}

{
  var x = 10;  // A3
  let y = 100;
  if (x === 10) {
    console.log(y);
  }
  console.log(y);
}

{
  let myArray = [1, 2, 3];  // B1
  myArray.forEach(element => {
    console.log(element);
  });
}

{
  let myArray = [1, 2, 3];  // B2
  for (const element of myArray) {
    console.log(element);
  }
}

{
  let dog = { // B3
    name: 'Buddy', color: 'black', age: 2
  };
  for (const k in dog) {
    console.log(k);
  }
}

{
  const numbersOne = [1, 2, 3]; // C1
  const numbersTwo = [4, 5, numbersOne];
  console.log(numbersTwo);
}

{
  const numbersOne = [1, 2, 3]; // C2
  const numbersTwo = [4, 5, ...numbersOne];
  console.log(numbersTwo);
}

//ข้อ4
function fun(...input) {
  let sum = 0;
  for (let i of input) {
    sum += i;
  }
  return sum;
}
console.log(fun(1, 2, 3, 4)); 