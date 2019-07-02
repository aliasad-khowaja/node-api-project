import * as mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
    fullName : {
        type: String,
        required: 'Enter full name'
    },
    email : {
        type: String,
        required: 'Enter email address'
    },
    dob : {
        type: Date,
        required: 'Enter date of birth'
    }
});

export default EmployeeSchema;