const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/productApp');
  console.log(1)
}

const productShcema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  price: {
    type: Number,
    min:0,
  },
  categories: [
    {
      type: String,
      required : true
    }
  ],
  qty: {
    online: {
      type: Number,
      default : 0
    },
    inStore: {
      type:Number,
      default : 0
    }
  }
})

//productShcema에 method를 추가해서 나중에 검색 후 수정의 과정 중 
//로직을 재사용하기 위해 분리 해둠
productShcema.methods.manipulteCount = function (buyCond) {

  if (buyCond === 'online') this.qty.online++
  else this.qty.inStore++

  return this.save()
  //save함수는 연산 후 비동기로 작동하기에 manipulteCount를 다른데서 쓸때 비동기로
  //해줘야함
}

const Product = mongoose.model('Product', productShcema);

const laptop = new Product({
  name: 'MacBook air', //productShcema를 만들때 required를 주었기 때문에 name을 
  //빼고 작성하면 오류남
  price: 1299, //그리고 productShcema에서 type을 Number라고 했지만 자바스크립트가
  //Number로 바꿀 수 있는 다른 종류의 타입을 변환해줌
  //고로 price에 '헬로월드'나 객체를 주면 에러 발생
  color: 'space gray',
  //에러가 발생하지 않지만 스키마에 작성하지 않았기 때문에 db에 저장되지 않음
  categories: ['it', 'laptop']
})

// laptop.save()
//   .then(res => { console.log(res) })
//   .catch(err => console.log(err))

Product.findOneAndUpdate({ name: 'MacBook air' }, { price: 1200 }, { runValidators: true })
  .then(res => console.log(res))
  .catch(err => console.log(err))
//findOneAndUpdate과 같이 대부분 db는 Update할때 유효성 검사가 잘 되지 않음 그러므로
//{ runValidators: true }를 옵션으로 주어야 함


const boughtSomething = async (prodName, buyCond) => {
  
  const boughtProduct = await Product.findOne({ name: prodName })

  await boughtProduct.manipulteCount(buyCond)
}

// boughtSomething('MacBook pro','online')
// boughtSomething('MacBook air','inStore')