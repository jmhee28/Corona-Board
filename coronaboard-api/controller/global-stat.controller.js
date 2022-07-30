// 1 GlobalStat 가져오기
//해당 디렉터리에 있는 index.js 파일의 코드를 읽어들입니다.
//이렇게 읽어들인 코드 중에서 GlobalStat 객체만 꺼내서 사용합니다.
const { GlobalStat } = require('../database'); 

const { wrapWithErrorHandler } = require('../util'); 

// 2 데이터 조회
async function getAll(req, res){
 
    const result = await GlobalStat.findAll();
    res.status(200).json({result});

}

// 3 데이터 삽입 또는 업데이트
async function insertOrUpdate(req, res){
    try {
        const { cc, date } = req.body;
        if (!cc || !date) {
            res.status(400).json({ error: 'cc and date are required' });
            return;
        }

        // 조건(국가 코드와 날짜)에 맞는 데이터 개수 확인
        const count = await GlobalStat.count({ where: { cc, date } });
        if (count == 0) {
            await GlobalStat.create(req.body);
        }
        else {
            await GlobalStat.update(req.body, { where: { cc, date } });
        }
        res.status(200).json({ result: 'success' });
    }
    catch (e) {
        res.status(500).json({ error: e.toString() });
    }
}

async function remove(req, res)
{
    const{cc, date} = req.body;
    if(!cc || !date)
    {
        res.status(400).json({error: 'cc and date are required'});
        return;
    }
    // GlobalStat.destroy( ) 함수를 호출할 때 조건을 명시하지 않으면 GlobalStat 테이블 안의 모든 데이터가 삭제
    await GlobalStat.destroy({
        where:{
            cc, 
            date,
        },
    });

    res.status(200).json({result: 'success'});

}

module.exports =  wrapWithErrorHandler({ 
    getAll,
    insertOrUpdate,
    remove,
});
