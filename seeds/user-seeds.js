const { User } = require('../models');

const userData = [
    {
        username: 'admin',
        firstName: 'Admin',
        lastName: 'Access',
        email: 'admin@admin.com',
        password: 'password',
        picture: 'none',
    },
    {
        username: 'kirtshair',
        firstName: 'Kirtley',
        lastName: 'Adams',
        email: 'hello@kirtleymichelle.com',
        password: 'password',
        picture: 'none',
    },
    {
        username: 'cjisfun',
        firstName: 'CJ',
        lastName: 'Sanders',
        email: 'cjsand03@gmail.com',
        password: 'password',
        picture: 'none',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;