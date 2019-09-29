import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * Declare the Schema of this Model for mogoose
 * to map data to and from the mongo database.
 * 
 * For more on Schema's , see official documentation
 * https://mongoosejs.com/docs/guide.html
 */
const SampleSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: "",
    required: true
  },
  authors: {
    type: [
      {
        type: String,
        default: ""
      }
    ],
    default: []
  },
  age: {
    type: Number,
    default: -1
  },
  email: {
    type: String,
    default: "",
    required: true
  }
});

// Assign an identifier for the SampleSchema
const model = mongoose.model("Sample", SampleSchema);

// Export it as the default for other packages to consume
export default model;