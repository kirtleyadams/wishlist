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
        
    }
)