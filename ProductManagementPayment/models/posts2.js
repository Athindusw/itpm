const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    paymentId: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    paymentDate: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    cardNumber: {
        type: String
    },
    totalAmount: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Posts2', postSchema);