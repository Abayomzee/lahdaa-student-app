/** @format */

import { CalenderCta } from "components/organisms/Modals/style";
import React, { useState, useEffect } from "react";
import { CalenderEmptyIcon } from "../SvgIcon";

interface AddToCalendarProps {
  targetDate: string;
  startTime: string;
}

const AddToCalendar: React.FC<AddToCalendarProps> = ({
  targetDate,
  startTime,
}) => {
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

  if (!timeLeft)
    return (
      <CalenderCta className="mx-auto mt-25" disabled={true}>
        <CalenderEmptyIcon />
        Add to Calendar
      </CalenderCta>
    ); // Display nothing if time has passed

  return (
    <CalenderCta className="mx-auto mt-25">
      <CalenderEmptyIcon />
      Add to Calendar
    </CalenderCta>
  );
};

export default AddToCalendar;
