import mongoose, { Schema, Document } from 'mongoose';

export interface IComment extends Document {
  userId: mongoose.Types.ObjectId;
  content: string;
  reactions: Array<{ userId: mongoose.Types.ObjectId, type: string }>;
}

const CommentSchema: Schema = new Schema({
  userId: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
  content: { type: String, required: true },
  reactions: [
    {
      userId: { type: mongoose.Types.ObjectId, ref: 'User' },
      type: { type: String },
    },
  ],
});

export default mongoose.model<IComment>('Comment', CommentSchema);
