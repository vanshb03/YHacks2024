import dbConnect from "../../lib/dbConnect"; // Adjust the path as necessary
import Event from "../../models/Event"; // Adjust the path as necessary

export default async function handler(req, res) {
    await dbConnect();

    switch (req.method) {
        case 'GET':
            try {
                const events = await Event.find({});
                res.status(200).json({ success: true, data: events });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        // You can add more cases here for POST, PUT, DELETE, etc.
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
