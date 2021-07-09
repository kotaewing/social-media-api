const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

router.use('/users', pizzaRoutes);
router.use('/thoughts', commentRoutes);

module.exports = router;