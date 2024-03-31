"use client"

import React, { useState, useEffect } from 'react';

const TimeComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  function tick() {
    setCurrentTime(new Date());
  }

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = days[currentTime.getDay()];
  const time = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <div>
      <p>Today is {day}</p>
      <p>The time is {time}</p>
    </div>
  );
}

export default TimeComponent;
