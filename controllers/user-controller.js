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
    }
}

module.exports = userController;