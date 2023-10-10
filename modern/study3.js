const out = function outer() {
  console.log("outer");
};

function inner() {
  function out() {
    console.log("inner");
    //식별자를 검색하는 규칙으로 인해 13줄에서 inner()를 실행해서 outer()를 진행 하는데
    //inner안에서 outer()를 실행하면 외부에 있는 outer가 아닌 내부의 outer가 실행
    //외부 함수를 const로 선언하고 실행해도 inner의 스코프 안에 있는 변수를 찾음
  }
  out();
  out();
}

inner();

//var vs let&const

//1 : 호이스팅 차이
console.log(foo);
foo = 123; //초기화
var foo; //선언
//js 엔진은 코드를 먼저 훑고 변수나 함수 선언문이 있으면 저장을 하고 순차적으로 내려오는데
//var는 변수를 초기화, 선언 하는 순서 보다 먼저 쓰였지만 그럼에도 호이스팅에 의해
//not defined 에러가 발생하지 않는다

// console.log(bar);
// bar = 123;
let bar;
// 27,28줄은 일시적 사각지대(tdz)에 걸려서 bar변수를 사용할 수 없음

//2 그리고 var로 선언된 변수는 window전역객체의 프로퍼티이지만 let은 그렇지 않음

//3 : 블록레벨 스코프

// var i = 100;
// for (var i = 1; i < 3; i++) {
//   console.log(i);
// }
// console.log(i, 1);
//var는 함수레벨 스코프 이기 때문에 함수가 아닌 반복문, if문 등의 {}범위에 관계 없이 변수가 겹친다
//그래서 i를 100이라고 선언 했지만 반복문에서 i = 1이라고 재 선언 되고 반복문이 실행되어 i가 3전까지 실행 되고
// 그 반복문에 나와서 다시 콘솔로 찍으니 i는 3이 되어있다

let i = 100;
for (let i = 1; i < 3; i++) {
  console.log(i);
}
console.log(i);
//let은 반면에 블록레벨 스코프, 함수나 반복, if문 관계 없이 무조건 {}범위, 스코프에 따라 변수환경이 다르게 설정되기 때문에
//{} 범위가 다른 하에 어디서든 변수i를 써도 겹치지 않는다
