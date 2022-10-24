const router = require('express').Router();
let listRoutes = require('./listRoutes');
let userRoutes = require('./userRoutes');

router.use('/lists', listRoutes);
router.use('/users', userRoutes);

module.exports = router;