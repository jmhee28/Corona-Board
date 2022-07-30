const puppeteer = require('puppeteer');

async function main(){

    const browser = await puppeteer.launch(); // 1헤드리스 브라우저 
    const page = await browser.newPage(); // 2 브라우저에 새 페이지 생성

    const pageUrl = 'https://yjiq150.github.io/coronaboard-crawling-sample/http-api-with-button'; 

    await page.goto(pageUrl, {

        /// 3 모든 네트워크 연결이 500ms 이상 유휴 상태가 될 때까지 기다림
        waitUntil: 'networkidle0',
    });
    
    // 4 제목/내용 불러오기 버튼 클릭
    //page 객체에서 제공하는 click( ) 함수를 이용하여 원하는 요소를 CSS 셀렉터로 지정하고,
    // 선택된 요소에 클릭 이벤트를 발생시켜서 웹브라우저에서 클릭한 효과를 만들어줍니다.
    await page.click('input[type="button"]');
    
    await page.waitForFunction(()=>{
        // 5 함수가 웹브라우저의 컨텍스트에서 실행되기 때문에 document 객체에 접근 가능 
        // id값이 content인 요소에 접 근하여 텍스트가 채워져 있는지를 확인합니다,
        return document.getElementById('content').textContent.length > 0;
    });

    // 6 특정 셀렉터에 대해 제공된 함수를 수행한 값 반환
    // page 객체에 존재하는 $$eval( ) 함수를 사용하면 웹브라우저 컨텍스트에서 
    // 코드를 실행하고, 반환값을 가져올 수 있습니다.
    // id값이 content인 요소를 찾고, 찾은 요소의 textContext 속성에 접근하여 가져온 값을 반환합니다.
    // 반환된 값은 최종적으로 content 변수 에 저장됩니다. 그 결과 ‘API 호출로 받아온 내용입니다’가 잘 출력됩니다.
    const content = await page.$$eval(
        '#content',
        (elements)=>elements[0].textContent,
    );

    console.log(content);

    await browser.close();// 7 작업이 완료되면 브라우저 종료
                            //크롤링이 완료되었으니 헤드리스 웹브라우저를 종료합니다.
                            // 웹브라우저는 메모리를 상당히 많 이 사용하는 애플리케이션이니까 까먹지 맙시다.
}

main();

