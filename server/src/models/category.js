import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
        trim: true,  
    },
    description: {
        type: String,
        trim: true, 
    }
}, {versionKey: false, timestamps: true }); 

export default mongoose.model('Category', categorySchema);
