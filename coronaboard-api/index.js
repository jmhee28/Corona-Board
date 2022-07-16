const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // 익스프레스 인스턴스 생성

// Content-Type이 application/json인 HTTP 요청의 바디를 파싱할 수 있도록 설정
app.use(bodyParser.json());
app.get('/',(req, res)=>{
    res.json({message: 'Hello CorobaBoard!'});
});

// 포트 기본값을 8080으로 지정
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});