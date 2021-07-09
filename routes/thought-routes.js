const router = require('express').Router();
const { getAllThoughts, getThoughtById, createThought, updateUser, deleteUser, addFriend, removeFriend } = require('./../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

router
    .route('/:thoughtId')
    .get(getThoughtById)
// .put(updateUser)
// .delete(deleteUser);

// router
//     .route('/:userId/friends/:friendId')
//     .post(addFriend)
//     .delete(removeFriend);


module.exports = router;