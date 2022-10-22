const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class List extends Model {}

List.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        visibible: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Public',
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        link: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Open',
        },
        notes: {
            type: DataTypes.STRING,
        },
        itemOwner: {
            type: DataTypes.UUID,
            references: {
                model: 'user',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'list',
    }
);

module.exports = List;