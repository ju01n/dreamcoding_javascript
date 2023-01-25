//1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log("kji's \n book");

//2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
  // counter = counter + 1;
  // preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

//4.Assignmnet operators (할당)
let x = 3;
let y = 6;
x += y; //x = x + y;
x -= y;
x *= y;
x /= y;

//5.Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal

//6.Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2; //false

// || (or), finds the first truthy value 
// 심플한 value들을 앞에 배치 하는 것이 효율적 
console.log(`or: ${value1 || value2 || check()}`); //check : 결국은 true 리턴  

//&&(and), find the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

  //often used to compress long if-statement
  //nullableObject && nullableObject.something
  // if(nullableObject != null){
  //   nullableObject.something;
  // }


function check() {
  for (let i = 0; i < 10; i++) {
     //wasting time 
     console.log('ㅠㅠ'); //value1이 true면 실행되지 않음 
  }
  return true;
}

// ! (not)
console.log(!value1);

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion 타입을 변경해서 검사
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

// === strict equality, no type conversion
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

// object equality by reference object는 저장될 때 reference 형태로 저장
const kim1 = { name: 'kim'};
const kim2 = { name: 'kim'};
const kim3 = kim1;
console.log(kim1 == kim2); //각각 다른 reference로 저장
console.log(kim1 === kim2); //값이 다르기때문에
console.log(kim1 === kim3); //true 

// equlity - puzzler
console.log(0 == false); //t
console.log(0 === false); //f
console.log('' == false); //f
console.log('' === false); //f
console.log(null == undefined); //t
console.log(null === undefined); //f

//8. Conditional operators: if
//if, else if, else
const name = 'kim';
if (name === 'kim'){ //true이면~ 
console.log('Welcome, kim!'); // 출력 
} else if (name === 'coder'){ 
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

//9. Ternary operator: ?   --> 간단할때만!
// condition ? value1 : value2;
console.log(name === 'coder' ? 'yes' : 'no'); //true면 왼쪽에 있는거 실행하고 아니면 다음에 있는거 출력

//10. Switch stsatement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  // case 'Chrome':
  //   console.log('love you!');
  //   break;
  // case 'Firefox':
  //   console.log('love you!');
  //   break;     ->반복이기 때문에 
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;   //-> 한번에 쓰기 가능 

  default:
    console.log('same all!');
    break;
}

//11.Loops
//while loop, while the condition is truthy,
//body code is executed.
let i = 3;
while (i > 0){
  console.log(`while: ${i}`);
  i--;
}

//do while loop, body case is executed first,
//then check the condition.
//먼저 실행한 다음에 조건이 맞는지 안맞는지 확인
do{
  console.log(`do while: ${i}`); 
  i--;
} while (i > 0); 

//먼저 실행하고 싶으면 do while, 조건문이 맞을 때만 실행하고 싶으면 while

//for loop, for(begin; condition; step) : begin한번만 호출하고 실행하기 전에 컨디션 검사, 블럭 검사 후 step 실행 --> condition 안맞을 때 까지 검사 
for (i = 3; i > 0; i--){
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2){
  //inline variable declaration
  console.log(`inline variable for: ${i}`);
}

//nested loops
//O(n^2) -> cpu에 좋지 않음 
for (let i = 0; i < 10; i++ ){
  for (let j = 0; j < 10; j++){
    console.log(`i: ${i}, j:${j}`);
  }
}

//break, continue


