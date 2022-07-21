const { DataTypes } = require('sequelize'); // 시퀄라이즈 불러오기

module.exports = (sequelize) => {// 화살표 함수를 외부로 익스포트
  return sequelize.define(
    'GlobalStat', // 매개 변수 1 : 모델 이름
    {// 매개 변수 2 : 속성 목록
        //모델의 속성을 정의하며, 데이터베이스 테이블의 컬럼에 매핑
        // <속성이름>: {
        //      <상세설정_1>, 
        //      <상세설정_2>,
        //       .. .
        //     },
        
      id: {// ID
        autoIncrement: true, // 값 자동 증가 
        type: DataTypes.INTEGER.UNSIGNED, // 부호 없는 정수 ( 양 의 정수 )
        allowNull: false, // 빈 값 허용 X
        primaryKey: true, // 기본 키로 지정
      },
      cc: { // 국가 코드 ( cc 는 country code 의 약자 
        type: DataTypes.CHAR(2),
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      confirmed: {// 확진 자 수
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      death: {// 사망자 수
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      released: {// 완치자 수 
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      tested: {// 총 검사자 수
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      testing: {// 검사 중 수
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      negative: {// 결과 음성 수
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {// 매개변수 3 : 추가 옵션
      sequelize,// 시퀄라이즈 인스턴스
      tableName: 'GlobalStat',// 데이터베이스에서 테이블의 이름
      timestamps: false,
      indexes: [// 테이블 인덱스
        {
          name: 'PRIMARY',
          unique: true,
          fields: [{ name: 'id' }],
        },
        {
          name: 'ccWithDate',
          unique: true,
          fields: [{ name: 'cc' }, { name: 'date' }],
        },
      ],
    },
  );
};