const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./database');

 

// Content-Type이 application/json인 HTTP 요청의 바디를 파싱할 수 있도록 설정
async function launchServer() {
    // 익스프레스 인스턴스 생성
    const app = express();
  
    // Content-Type이 application/json인 HTTP요청의 body를 파싱할 수 있게 해줍니다.
    app.use(bodyParser.json());
  
    app.get('/', (req, res) => {
        //req 객체 는 수신된 HTTP 요청에 대한 모든 정보를 담고 있으며
        //res 객체는 클라이언트에 돌려줄 HTTP 응답을 만들 때 사용합니다.
      res.json({ message: 'Hello CoronaBoard!' });
    });

    try {
        //sequelize에 정의된 객체 모델을 기준으로 실제 데 이터베이스와 동기화를 수행해 테이블 스키마를 생성 또는 변경하는 역할
        await sequelize.sync();
        // only for dev
        // sequelize.sync({ force: true });
        console.log('Database is ready!');
      } catch (error) {
        console.log('Unable to connect to the database:');
        console.log(error);
        process.exit(1);
      }
  
// 포트 기본값을 8080으로 지정
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
}
launchServer();