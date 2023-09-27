//원시값 (str,num bigint , bool , symbol , undefined, null)은 변경이 불가능 하고 값(메모리 주소)으로써 전달 된다
var t = null;

var c = t;
t = false;
console.log(c, t);

//하지만 객체는 변경 가능한 값이기 때문에 재할당 외에는 변수의 값이 불가능한 원시 값관 달리 객체는 재할당을 하지 않아도 변수의 값을 바꿀 수 있다

const o1 = { x: 1 };
const o2 = { x: 1 };

console.log(o1, o2, o1 === o2); // false인 이유는 두 변수 모두 똑같은 객체를 넣어서 사람이 보기엔 둘의 비교는 참으로 예상 되지만 { x: 1 }라는 객체는
//js엔진, 컴퓨터 구조 상 다른 메모리 주소(예: 각각 0x0130123 , 0x121312처럼)를 갖기 때문에 둘의 비교시 false가 된다

const f1 = function () {};
``;
const f2 = function () {};

console.log(f1, f2, f1 === f2);

// console.log(f(), fp()); f()는 함수 호이스팅으로 선언이전에 호출 함에도 undefined이지만 fp()는 표현식이라서 선언 전에 호출하면 타입에러 발생
var fp = function () {};
function f() {}
