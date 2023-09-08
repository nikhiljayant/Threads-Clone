import mongoose, { mongo } from 'mongoose';

const threadSchema = new mongoose.Schema({
    text: { type: String, required: true },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    community: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Community',
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

    // In case that Thread is a Comment
    parentId: {
        type: String
    },

    // There can be multiple Child Threads of a single Thread
    children: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thread'
        }
    ]
});

const Thread = mongoose.models.Thread || mongoose.model('Thread', threadSchema);

export default Thread;