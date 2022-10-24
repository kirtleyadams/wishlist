const List = require('./List');
const User = require('./User');

User.hasMany(List, {
    foreignKey: 'itemOwner',
    onDelete: 'CASCADE',
});

List.belongsTo(User, {
    foreignKey: 'itemOwner',
})

module.exports = { List, User };