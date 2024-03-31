import { useEffect, useState } from "react";

const EventsPage = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/events');
            const { data } = await res.json();
            setEvents(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Events</h1>
            {events.map((event) => (
                <div key={event._id}>
                    <h2>{event.name}</h2>
                    <p>{event.description}</p>
                    {/* Render other event details */}
                </div>
            ))}
        </div>
    );
};

export default EventsPage;
