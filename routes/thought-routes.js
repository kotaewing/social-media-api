const router = require('express').Router();
const { getAllThoughts, getUserById, createThought, updateUser, deleteUser, addFriend, removeFriend } = require('./../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// router
//     .route('/:userId')
//     .get(getUserById)
//     .put(updateUser)
//     .delete(deleteUser);

// router
//     .route('/:userId/friends/:friendId')
//     .post(addFriend)
//     .delete(removeFriend);


module.exports = router;