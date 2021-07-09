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
    },

    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.thoughtId })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err));
    },

    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            body,
            { new: true }
        )
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err))
    },

    deleteThought({ params }, res) {
        Thought.findOneAndDelete(
            { _id: params.thoughtId }
        )
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err))
    },
}

module.exports = thoughtController;