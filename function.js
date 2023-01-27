//Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

//1. Function declaration
// function name(param1, param2) {body ... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello(){
  console.log('Hello');
}
printHello();

function log(message){ 
  console.log(message);
}
log('안녕')
//message가 어떤 타입인지 모름 -> 타입이 중요한 언어에서는 한계 


//2. Parameters
//premitive parameters: passed by value 밸류 저장
//object parameters: passed by reference 레퍼런스 저장 
function changeName(obj){
  obj.name = 'coder'; //이름을 코더로 무조건 변경하는 함수
}
const kim = { name : 'kim' };
changeName(kim);
console.log(kim);
//함수안에서 오브젝트의 값을 변경하게 되면 그 변경된 사항이 그대로 메모리에 저장 되기 때문에 추후에 변경된 사항들을 확인 가능

//3. Default parameters (added in ES6)
// function showMessage(message, from){
//   console.log(`${message} by ${from}`);
// }
// showMessage('hi!'); 
//-> from이 지정되어있지 않기 때문에 undefined로 출력 

//수정
function showMessage(message, from = 'unknown'){ //from에 unknown 값 설정
  console.log(`${message} by ${from}`);
}
showMessage('hi!');

//4. Rest parameters (added in ES6)
function printAll(...args){ //배열 형태로 전달
  for(let i = 0; i < args.length; i++){
    console.log(args[i]);
  }
  //bonus1
  for (const arg of args){ //for~of: arg에 있는 값들이 차례대로 
    console.log(arg);
  }
  //bonus2
  args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'ellie');


// 5.Local scope
let globalMessage = 'global'; //global variable
function printMessage(){ //블럭 안에서 변수 선언 - 지역변수
  let message = 'hello';
  console.log(message); //local variable;
  console.log(globalMessage);

  function prtintAnother(){
    console.log(message);
    let childMessage = 'hello'
  }

}
printMessage();

//밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다... 

//6. Return a value
function sum(a, b){
  return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

//모든 리턴이 없는 함수들은 return undefined; 생략되어있음 

// 7. Early return, early exit
// bad - 블록 안에서 모든 코드를 쓰면 가독성이 떨어짐 
function upgradeUSer(user){c
  if (user.point > 10){
    // long upgrade logic ... 
  }
}
//good  - 조건이 맞지 않을때 빨리 리턴해서 함수를 종료하고 조건이 맞을 때만 필요한 로직들을  뒤에 실행하는 것이 좋음
function upgradeUSer(user){
  if (user.point <= 10){
    return;
  }
  //long upgrade logic.. 
}


//First-class function
//function are treated like any other variable
//can be assigned as a value to variable
//can be passed as and argument to other functions.
//can be returned by another function

//1.Function expression
//a function declaration can be called earlier than it is defined. (hoisted)
//a function expression is created when the execution reaches it.
const print = function () { //함수에 이름이 없는 것 - anonumous function 
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//function declaration과 function expression의 가장 큰 차이점
//f.e는 할당된 다음부터 호출 가능 
//f.d는 hoisting이 가능 : 함수가 선언되기 이전에 호출해도 가능 -> 자바스크립트는 호출된 함수들을 위로 끌어올리기 때문에 


//2.Callback function using fucntion expresstion
function randomQuiz(answer, printYes, printNo){ //함수를 전달해서 상황이 맞으면 불러!! 
  if (answer === 'love you'){
    printYes();
  } else {
    printNo();
  }
}
//anonymous function
const printYes = function () {
  console.log('yes!');
};

//named function
//better debugging in debugger's stack taces
//recursions
const printNo = function print() {
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


//Arrow function
//always anonumous
// const simplePrint = function(){
//   console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');

// const add = function (a, b){
//   return a + b;
// };
const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
  //do something more
  return a * b;
};

//IIFE : Immediately Invoked Function Expresstion
(function hello(){
  console.log('IIFE');
})(); 
//바로 함수 호출 가능쓰 