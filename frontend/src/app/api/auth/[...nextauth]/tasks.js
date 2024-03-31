// Import the database connection function and the Task model
import dbConnect from '../../lib/dbConnect';
import Task from '../../models/testmodels';

/**
 * The API handler function for creating a new task.
 * 
 * @param {import('next').NextApiRequest} req - The API request object.
 * @param {import('next').NextApiResponse} res - The API response object.
 */
export default async function handler(req, res) {
  // First, check the request method
  if (req.method === 'POST') {
    try {
      // Connect to the MongoDB database
      console.log('CONNECTING TO MONGO');
      await dbConnect();
      console.log('CONNECTED TO MONGO');

      // Create a new Task document from the request body. Assumes the body directly contains the task fields.
      console.log("CREATING DOCUMENT");
      const task = await Task.create(req.body);

      // Respond with the created document
      res.status(201).json({ success: true, data: task });
    } catch (error) {
      console.error("ERROR CREATING DOCUMENT", error);
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    // If the request method is not POST, return a 405 Method Not Allowed error
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
