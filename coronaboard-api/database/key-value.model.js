
const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'KeyValue',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER.UNSIGNED,
                allowNUll: false,
                primaryKey: true,
            },
            key: {
                type : DataTypes.STRING,
                allowNUll: false,
            },
            value: {
                type: DataTypes.TEXT,
                allowNUll: false,
            },
        },
        {
            sequelize,
            tableName: 'KeyValue',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    fields: [{name: 'id'}],
                },
                {
                    name:'key',
                    unique: true,
                    fields: [{name:'key'}],
                },
            ],
        },
    );
};