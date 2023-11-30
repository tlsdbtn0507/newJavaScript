const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log(1)
}

//db에 넣을 스키마 생성
const todoSchema = new mongoose.Schema({
  title: String,
  date: Date,
  done: Boolean,
  review:String
})

//class처럼 스키마에 담을 정보를 객체화
const Todo = mongoose.model('Todo', todoSchema);

//단일 class생성
const todo1 = new Todo({ title: 'test3', date: new Date(), done: false, review: '' });

//넣고 싶은 단일 class 추가
// todo1.save();

// find 함수안에 찾고자 하는 객체의 정보 넣기 ex.{done:true} or {date:{$gte : new Date(123124)}}
// 객체 이후로 콜백함수를 넣어 오류에 대한 예외처리 할 수 있음
const found = Todo.find({done:true}).then(data => { console.log(data) })