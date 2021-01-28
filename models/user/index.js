"use strict";

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	username: { type : String , unique : true, required : true, dropDups: true },
	password: { type : String , required : true },
	age: { type : Number , required : true },
	score: { type : Number , required : true },
	sessionToken: String
});

module.exports = mongoose.model('User', userSchema);
