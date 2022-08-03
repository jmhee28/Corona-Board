import React from "react";

export function Slide(props){// 2 Slide라는 이름의 함수형 컴포넌트 선언
    const {title, children} = props; // 3 부모 컴포넌트에서 전달받은 속성값 추출
    return(// 4 이 컴포넌트가 렌더링될 형태 반환
        <div>
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
    );
}