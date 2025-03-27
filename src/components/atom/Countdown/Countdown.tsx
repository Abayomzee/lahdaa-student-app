/** @format */

import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string; // Format: "YYYY-MM-DD"
  startTime: string; // Format: "HH:mm"
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, startTime }) => {
  const getTargetTime = () =>
    new Date(`${targetDate}T${startTime}:00`).getTime();

  const calculateTimeLeft = () => {
    const difference = getTargetTime() - Date.now();
    if (difference <= 0) return null; // Hide if time has passed

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, "0"),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
        .toString()
        .padStart(2, "0"),
      minutes: Math.floor((difference / (1000 * 60)) % 60)
        .toString()
        .padStart(2, "0"),
      seconds: Math.floor((difference / 1000) % 60)
        .toString()
        .padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!timeLeft) return; // Stop if time has passed

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]); // Depend on timeLeft so it updates

  if (!timeLeft) return <>COMPLETED</>; // Display nothing if time has passed

  return (
    <>
      Starting in - {timeLeft.days}days : {timeLeft.hours}hrs :{" "}
      {timeLeft.minutes}mins : {timeLeft.seconds}secs
    </>
  );
};

export default Countdown;
