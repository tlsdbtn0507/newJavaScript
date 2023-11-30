const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todos');
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
const todo1 = new Todo({ title: 'test1', date: new Date(), done: false, review: '' });
const todo2 = new Todo({ title: 'test2', date: new Date(), done: false, review: '' });
const todo3 = new Todo({ title: 'test3', date: new Date(), done: false, review: '' });
const todo4 = new Todo({ title: 'test4', date: new Date(), done: false, review: '' });

// [5, 6, 7, 8].map(e => new Todo(
// { title: `test${e}`, date: new Date(), done: false, review: '' }))
// .forEach(todo => todo.save())

//넣고 싶은 단일 class 추가
// todo1.save();
// todo2.save();
// todo3.save();
// todo4.save();

// find 함수안에 찾고자 하는 객체의 정보 넣기 ex.{done:true} or {date:{$gte : new Date(123124)}}
// 객체 이후로 콜백함수를 넣어 오류에 대한 예외처리 할 수 있음
const found = Todo.find({ done: true }).then(data => { console.log(data) })

//update

// Todo.updateOne({ title: 'test1' }, { review: 'test1 update' }).then(res => {
//   console.log(res)
// })
// Todo.updateMany(
//   { title: { $in: ['test2', 'test4'] } }, { review: 'updating many' })
// .then(res => {
//   console.log(res)
// })

//test3만 바뀜 왜냐면 메서드 이름이 findOne이라서
// Todo.findOneAndUpdate({ title: { $in: ['test3','test7'] } }, { done: true })
// .then(res => console.log(res))