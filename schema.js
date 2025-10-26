const mongoose = require('mongoose');


const courseSchema = new Schema({
  title: {
    type: String,
    required: true, 
  },
  description: {
    type: String, 
  },
  durationWeeks: {
    type: Number,
    required: true, 
  },
  instructor: {
    type: String,
    required: true, 
  },
});


const studentSchema = new Schema({
  name: {
    type: String,
    required: true, 
  },
  email: {
    type: String,
    required: true, 
    unique: true,
  },
  enrollmentDate: {
    type: Date,
    default: Date.now, 
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Course', 
    },
  ],
});


const Course = mongoose.model('Course', courseSchema);
const Student = mongoose.model('Student', studentSchema);

module.exports = { Course, Student };