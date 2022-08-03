import React from "react"
import {Slide} from '../components/slide'; //2 Slide 컴포넌트 임포트

export default function Home() {

  const thirdSlideTitle = '예방 행동 수칙';

  return( // 3 이 컴포넌트가 렌더링될 형태 반환
  <div>
    <h1>코로나 </h1>
    
    {/*4 문자열로 속성 지정*/}
    <Slide title= "국가별 현황">국가별 현황을 보여줍니다.</Slide>
    
    {/* 5 자바스크립트 문자열로 속성 지정 */} 
    <Slide title={'대한민국 지역별 현황'}>
      대한민국 지역별 현황을 보여줍니다.
    </Slide>
    
    {/* 6 자바스크립트 변수로 속성 지정 */}
    <Slide title = {thirdSlideTitle}>예방 행동 수칙을 보여줍니다.</Slide>
    
  </div>
  );
}
