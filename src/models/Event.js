
const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventSchema = new Schema({
  organizer: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  eventType: {
    type: String,
    enum: ['activism','art','business','comedy','culture','fitness','food','gaming','music','social','sports'],
    required: true
  },
  description: String,
  keyWords: String
}, {
  timestamps: true,
});

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;