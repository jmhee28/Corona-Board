const axios = require('axios'); 
const cheerio = require('cheerio'); 

// 1 추출된 자바스크립트 코드를 별도 실행하는 가상 환경 기능 로드
const vm = require('vm');

async function main(){
    const resp = await axios.get(
        'https://yjiq150.github.io/coronaboard-crawling-sample/dom-with-script',
    );

    const $  = cheerio.load(resp.data);

    // 2 script 태그를 찾아서 코드 추출
    const extractedCode = $('script').first().html();
    
    // 3 컨텍스트를 생성 후 해당 컨텍스트에서 추출된 코드 실행
    // 컨텍스트란 코드가 실행되 면서 생성한 변수나 값들이 저장되는 공간
    //행된 코드에서 사용한 변 수들은 해당 컨텍스트 안에서만 생성되고 존재
    //코드가 실행되면 dataExample 변수가 컨텍스트 내에 생성되어, 컨텍스트 객체를 통해서 접근할 수 있다.
    const context = {};
    vm.createContext(context);
    vm.runInContext(extractedCode, context);

    // 4 스크립트 내에 하드코딩된 정보에 접근 
    // dataExample 변수를 이용하여 목표로 한 ‘크롤링할 내용’을 추출
    console.log(context.dataExample.content);

}

main();