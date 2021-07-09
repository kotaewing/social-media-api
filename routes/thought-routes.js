const router = require('express').Router();
const { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, addFriend, removeFriend } = require('./../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// router
//     .route('/:userId/friends/:friendId')
//     .post(addFriend)
//     .delete(removeFriend);


module.exports = router;