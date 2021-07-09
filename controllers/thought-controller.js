const { User, Thought, Reaction } = require('../models');

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err))
    },

    createThought({ body }, res) {
        console.log(body)
        Thought.create(body)
            .then(({ _id, userId }) => {
                console.log(_id, userId)
                return User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then(dbThoughtData => {
                console.log(dbThoughtData)
                res.json(dbThoughtData)
            })
            .catch(err => res.json(err))
    }
}

module.exports = thoughtController;