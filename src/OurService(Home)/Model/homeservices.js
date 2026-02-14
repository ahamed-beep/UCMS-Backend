import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  serviceNumber: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  subtitle: {
    type: String,
    trim: true,
    default: ''
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'book'  // Home page icon
  },
  servicePageImage: {
    type: String,
    default: ''  // Our Service page image
  },
  bulletPoints: [{
    title: {
      type: String,
      trim: true,
      required: true
    },
    description: {
      type: String,
      trim: true,
      required: true
    }
  }]
}, {
  timestamps: true
});

const Service = mongoose.model('Service', serviceSchema);
export default Service;