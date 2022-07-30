
const errorHandler = (block) => async (req, res) => { 
    //컨트롤 러에 정의된 getAll( ), insertOrUpdate( ), remove( ) 같은 함수들이
    // errorHandler( ) 함수의 인수인 block( ) 함수에 대입되어 사용된다
    try {
        await block(req, res);

    }catch(e){
        res.status(500).json({ error: e.toString()});
    }
};

const wrapWithErrorHandler = (obj) => {
    //Object.keys( ) 함수는 해당 객체가 가진 모든 키key를 배열로 반환하는 함수
    
    Object.keys(obj).forEach((key)=>{
        obj[key] = errorHandler(obj[key]);
    });
    return obj;
};

module.exports = {
    wrapWithErrorHandler,
}