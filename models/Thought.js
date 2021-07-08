const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const ReactionSchema = require('./Reaction');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            validation: [({ length }) => length >= 280]
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },

        username: {
            type: String,
            required: true
        },

        reactions: [reactionSchema]
    },

    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
)

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;