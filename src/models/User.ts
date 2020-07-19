import { Schema, model } from 'mongoose';

const userSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    registerDate: {
        type: Date,
        required: true,
    }
}, { versionKey: false });

export default model('users', userSchema);
