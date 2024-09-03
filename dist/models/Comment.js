"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CommentSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.default.Types.ObjectId, required: true, ref: 'User' },
    content: { type: String, required: true },
    reactions: [
        {
            userId: { type: mongoose_1.default.Types.ObjectId, ref: 'User' },
            type: { type: String },
        },
    ],
});
exports.default = mongoose_1.default.model('Comment', CommentSchema);
