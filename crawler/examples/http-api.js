const axios = require('axios'); 

// axios에서는 응답 헤더의 Content-Type이 application/json이면 응답 내용이 JSON 인 것을 인식하고 텍스트로 받은 응답을 자동으로 자바스크립트 객체로 만듭니다
async function main() { 
    const resp = await axios.get( 'https://yjiq150.github.io/coronaboard-crawling-sample/example-data.json', ); 
    console.log(resp.data.content);
}
main();