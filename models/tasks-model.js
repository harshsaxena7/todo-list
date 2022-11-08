import mongoose from 'mongoose';
const { Schema } = mongoose;
const tasksSchema = new Schema({
    task_id: {
        type: String,
        required: 'task_id is required',
        unique: true
    },
    name: {
        type: String,
        required: 'Name is required'
    },
    description: {
        type: String,
        required: 'description is required'
    },
    category: {
        type: String,
        required: 'category is required'
    },
    priority: {
        type: String,
        enum: ['low', 'med', 'high'],
        default: 'high',
        required: 'priority is required'
    }
});
const Task = mongoose.model('Task', tasksSchema);
export default Task;