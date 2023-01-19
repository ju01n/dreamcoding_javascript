//1. Use strict
//added in ES 5
// use this for valina javascript

'use strict';

//2. Variable
//let (Added in ES6)
let globalName = 'global name';
//어느곳에서나 접근 가능 
//실행되는 순간부터 끝날때까지 항상 메모리에 탑재되어있기 때문에 최소한으로 쓰기
//꼭 필요한 부분에만 쓰는것이 좋음 ! 

{
  let name = 'kimjeongin';
  console.log(name);
  name = 'hello';
  console.log(name);
}
console.log(name); //예는 안된다 
console.log(globalName);

// var  --> (don't ever use this!!!)
//값을 선언하기도 전에 쓸 수 있음 
//var hoisting (move, declaration from bottom to top)
//block scope이 없음 -> block을 철저히 무시..

//3. Constants -> 한번 할당하면 값이 절대 바뀌지 않음
//favor immutable data type always for a few reasons:
//-security 
//-thread safety
//-reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//4. Variable types
//primitive, single item:number, string, boolean, null, undefined, symbol
//object, box container(single item을 묶어서 한 단위로 관리)
//function, first-class function -> function도 다른 데이터타입처럼 할당 가능

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type:${typeof count}`);
console.log(`value: ${size}, type:${typeof size}`);
// ->값에 상관없이 타입이 number로 나옴


//number - special numeric values : infinity, -infinity, NaN, 
const infinity = 1 / 0; //무한대의 숫자값 
const negativeInfinity = -1 / 0; //마이너스 무한대 
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 123243123434523452452435245245245n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

//string 
const char ='c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
//백틱과 원하는 string을적고 $, {}이용하면 변수 값이 자동으로 고쳐짐
//백틱을 이용하면 중간에 스페이싱, 문자열들이 그대로 나오기 때문에 간편하게 string쓰기가능
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false:0, null, undefined, NaN, '' 
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null -> 텅텅~~ 넌 아무것도 아니야
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined -> 선언은 되었지만 아무것도 정해진게아니다 
let x;

//let x = undefined;
console.log(`value: ${x}, type:${typeof x}`);

//symbol, created unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
//자료구조에서 고유한 식별자가 필요하거나 동시다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때 .. 
//동일하게 id로 심볼을 만들었지만 다른 고유한 심볼로 만들어짐 
console.log(symbol1 === symbol2); //false

//주어진 string에 맞는 symbol을 만들어줘! 
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof gSymbol1}`);

//object, real-life object, data structure
const jeongin = {name: 'jeongin', age:30 }; //const로 지정 해 다른 변수 재할당 불가능
jeongin.age = 21;
console.log();

//5. Dynamic typing: dynamically typed language
//자바스크립트는 프로그램이 동작할 때 할당된 값에 따라서 타입이 변경 될 수 있음 
let text = 'hello';
console.log(text.charAt(0)); //string으로 이해하기 때문에 'h'가져옴
console.log(`value: ${text}, type:${typeof text}`); //type - text
text = 1;
console.log(`value: ${text}, type:${typeof text}`); //type이 숫자로 변경
text = '7' + 5;
console.log(`value: ${text}, type:${typeof text}`); //문자열에 +가 있으니까 string으로 인식
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); //type - number로 변환되어서 나누기가 실행됨 
console.log(text.charAt(0)); // error (중간에 타입을 숫자로 바뀌어서)
//자바스크립트에서 런타임에서 타입이 정해지기 때문에 에러가 뜰 가능성..  그래서 타입스크립트가 나옴 ! 

