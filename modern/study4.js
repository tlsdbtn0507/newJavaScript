const obj = new Object();
console.log(obj);

//생성자 함수는 생성 후 인스턴스를 반환한다

function Circle(radius) {
  //암묵적으로 빈 객체가 생성 되고 그 객체는 this에 바인딩된다

  //this에 바인딩된 객체에 값(인스턴스)을 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return this.radius * 2;
  };
  //암묵적으로 바인딩한 this반환
  //근데 명시적으로 return {} 객채룰 의도적으로 반환하면 this반환이 안된다
  //다행이 return primitive value : 원시값을 의도적으로 반환하면 this가 반환 되지만
  //생성자에선 명시적으로 반환을 안하는게 좋다
}

const cir = new Circle(5);
//new생성자로 쓰면 cir변수에 생성사 함수에 의해 생긴 this,인스턴스를 담은 객체가 저장되지만

const noNew = Circle(5);
//new 생성자 없이 Circle를 실행하면 생성자 함수가 아닌 일반함수로 쓰여서 noNew변수에 생성자에
//서 만든 객체가 저장 되지 않는다 게다가 일반함수의 Circle안에 있던 this는 전역객체 window를 가리키고
//Circle의 인스턴스인 radius getDiameter가 window에 저장된다
console.log(radius, getDiameter());
