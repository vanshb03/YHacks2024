import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  summary: {
    type: String,
    required: [true, 'Summary is required'],
  },
  start: {
    type: Date,
    required: [true, 'Start date is required'],
  },
  end: {
    type: Date,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
}, { timestamps: true }); // Add createdAt and updatedAt timestamps

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);

export default Task;
