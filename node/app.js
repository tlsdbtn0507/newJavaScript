const express = require('express');
const app = express();

app.listen(3000,()=>{
  console.log('server running!')
})

//기본 라우터(로컬호스트:3000에 get함수로 첫번째 인자로 해당 라우터 주소를, 2번째 인자로 라우터에 갈때 마다
//실행할 함수를 넣어준다)
app.get('/cats' , (req,res)=>{
  console.log('cat got a response')
  res.send('<h1>Cat</h1>')
  //참고로 res.send 이후로는 함수 실행을 안함
  //res.send에는 객체를 넣을 수도 잇음
})

app.get('/r/:param/:id', (req, res) => {
  const {param, id} = req.params

  res.send(`<h1>${param}</h1><h2>${id}</h2>`)
})

app.get('/search', (req, res) => {
  const { q } = req.query;

  if(!q) res.send('nothing found cause nothing searched')

  res.send(`<h1>you are searching :${q}</h1>`)

})

//1
app.use(express.urlencoded({ extended: true }))

//2
app.use(express.json())

//post요청에 응답하는 코드
app.post('/taco', (req, res) => {
  console.log('got a post')
  console.log(req.body)
  //1번 주석의 코드를 활용해서 express가 /taco로 온 post의 body를 읽을 수 있게 해줌
  //2번 주석의 코드는 express에서 주고 받을(get, post etc..)것들을 중간에 json화 해줌
  //그리고 보통 db에 데이터를 넣을때 req.body를 구조분해 해서 원하는 정보만 보냄
})