const { List, User } = require('../models');

module.exports = {
    myList: async (req, res) => {
        if (!req.session.loggedIn) {
            return res.redirect('/home');
        }
        try {
            const listData = await List.findAll({
                where: {
                    itemOwner: req.session.user.id,
                    status: 'Open',
                },
                order: [
                    ['name', 'ASC'],
                ]
            })

        } catch (e) {
            res.json(e);
        }
    },
}