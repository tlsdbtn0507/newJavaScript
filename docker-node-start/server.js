const express = require('express');
const PORT = 8080;
const app = express();

app.get('/', (req, res) => {
  res.send("Bothering Refresh.");
})
app.listen(PORT, () => {
  console.log('애플리케이션이 실행됐습니다');
})