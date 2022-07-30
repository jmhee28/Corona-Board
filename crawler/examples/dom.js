const axios = require('axios');
const cheerio = require('cheerio');

async function main(){

    // 1 HTML 로드하기    
    const resp = await axios.get(        
        'https://yjiq150.github.io/coronaboard-crawling-sample/dom'  
    );
    /*axios.get( ) 함수는 웹페이지에 HTTP GET 요청을 보내서 HTTP 응답을 받습니다. 
    *resp 객체의 data 필드를 통해서 응답받은 HTML 내용에 접근할 수 있습니다.
    * HTML 응답 내용은 웹 브라우저로 열었을 때와 완전히 동일합니다.*/

    const $ = cheerio.load(resp.data); // 2 HTML을 파싱하고 DOM 생성하기
   
    const elements = $('.slide p'); // 3 CSS 셀렉터로 원하는 요소 찾기
    /*
    노드JS 런타임은 웹브라우저가 아니므로 해당 HTML 내용을 자동으로 파싱하여 DOM을 만들어 주지는 못합니다. 
    그래서 2 cheerio 라이브러리를 이용하여 DOM을 만들어줍니다. 
    cheerio.load( )를 통해 DOM을 구성한 후 cheerio 객체 형태로 반환해줍니다. 
    이렇게 반환된 cheerio 객체는 내부에 DOM 정보를 모두 가지고 있습니다.
    생성된 cheerio 객체는 관행적으로 $ 변수 에 저장해 사용합니다. 
    이렇게 변수 이름을 지정하면 3 CSS 셀렉터로 원하는 요소를 찾을 때도 $('.slide p') 형식으로 호출할 수 있어 편리합니다. 
    이러한 형식으로 요소를 찾는 방식은 jQuery11 에서부터 사용하는 오래된 관습입니다. 
     */

    // 4 찾은 요소를 순회하면서 요소가 가진 텍스트 출력하기
    elements.each((idx, el) =>{
        // 5 text() 메서드를 사용하기 위해 Node 객체인 el을 $로 감싸서 cheerio 객체로 변환
        console.log($(el).text());
    });
    
    /*el 변수에 담긴 요소는 cheerio에서 만들어낸 DOM 상의 Node 객체12입니다. 
    이 Node 객체는 순수하게 DOM 상의 Node를 표현하는 기능만 갖고 있습니다
    (웹브라우저에서 DOM을 다룰 때 존재하는 Node 객체와 기본적인 개념은 동일하지만 제공되는 기능에 차이가 있습니다).
     때문에 단순히 Node 객체만 가지고는 해당 Node와 자식 Node가 가진 텍스트 내용만 손쉽게 추출할 방법이 없습니다. 
     하지만 이 Node 객체를 cheerio 객체13로 한 번 감싸주면 cheerio에서 제공하는 추가 기능을 사용할 수 있게 됩니다.
      위 예시에서 Node와 그 자식 Node가 가진 텍스트 내 용만 추출하는 데 사용한 text( ) 함수가 바로 cheerio에서 제공되는 기능입니다.
      (이러한 패턴 또 한 앞서 언급한 jQuery에서 사용하던 코드 관습을 그대로 옮겨온 겁니다)
     */
}

main();