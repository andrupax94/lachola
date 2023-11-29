const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: 'Please supply a title',
            
        },
        description: {
            type: String,
        }
    
    },
);

module.exports = mongoose.models.Task || mongoose.model('Task', taskSchema);
