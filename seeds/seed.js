const seedUsers = require('./user-seeds');
const seedLists = require('./list-seeds');

const sequelize = require('../config');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    // await seedLists();
    // console.log('\n----- LISTS SEEDED -----\n');

    process.exit(0);
};

seedAll();