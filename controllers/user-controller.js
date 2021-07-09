const { User } = require('./../models');

const userController = {
    getAllUsers(req, res) {
        User.find({})
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

    getUserById({ params }, res) {
        User.findOne({ _id: params.userId })
            .populate({
                path: 'thoughts',
                // select: '-__v'
            })
            .populate({
                path: 'friends',
                // select: '-__v'
            })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

    updateUser({ params, body }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            body,
            { new: true }
        )
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err))
    },

    deleteUser({ params }, res) {
        User.findOneAndDelete(
            { _id: params.userId }
        )
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err))
    },

    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: params.friendId } },
            { new: true }
        )
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err))
    },

    removeFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err))
    }

}

module.exports = userController;