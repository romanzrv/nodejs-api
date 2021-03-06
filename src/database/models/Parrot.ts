const mongoose = require('mongoose');

const ParrotSchema = new mongoose.Schema({
    uniqueId: {type: Number, required: true},
    type: {type: String, required: true},
    name: {type: String, required: true},
    age: {type: Number, required: true},
    canSpeak: {type: Boolean, required: true}
});

const parrot = mongoose.model('Parrot', ParrotSchema);

module.exports = parrot;