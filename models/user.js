const { Schema} = require("mongoose");
const mongoose = require("mongoose");


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
      },
    },
    thoughts: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thought",
    },
    friends: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
   },
    toJSON: {
      virtuals: true,
    },
  }

);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

module.exports = userSchema;
