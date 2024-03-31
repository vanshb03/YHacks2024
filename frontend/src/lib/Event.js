import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    description: String,
    // Define other fields based on your JSON structure
});

export default mongoose.models.Event || mongoose.model('Event', eventSchema);
