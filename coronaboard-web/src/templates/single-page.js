
import React from "react"
import { Slide } from '../components/slide';

export default function SinglePage({ pageContext }) { // 1
    const { dataSource } = pageContext; // 2
    const { thirdSlideTitle } = dataSource; // 3 
    return (<div>
        <h1>코로나보드</h1>
        <p>createPage로 만들어진 페이지입니다.</p> {/* 4 */}
        <Slide title="국가별 현황">국가별 현황을 보여줍니다.</Slide>
        <Slide title={'대한민국 지역별 현황'}> 대한민국 지역별 현황을 보여줍니다. </Slide>
        <Slide title={thirdSlideTitle}>예방 행동 수칙을 보여줍니다.</Slide>
    </div>
    );
}
