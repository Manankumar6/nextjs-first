'use client';

import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = ({ durationInDays }) => {
  const [targetDate, setTargetDate] = useState(null);

  // Calculate the target date only on the client side
  useEffect(() => {
    const now = new Date();
    const calculatedDate = new Date(now);
    calculatedDate.setDate(now.getDate() + durationInDays);

    // Adjust to the end of the day
    calculatedDate.setHours(23, 59, 59);
    setTargetDate(calculatedDate);
  }, [durationInDays]);

  // While the targetDate is being calculated, show a loading state
  if (!targetDate) {
    return <p className="text-gray-500 font-semibold mt-4">Loading...</p>;
  }

  return (
    <div className="text-red-600 text-2xl dark:text-yellow-500 font-semibold mt-4">
      <Countdown
        date={targetDate}
        daysInHours={true}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return (
              <p className="text-red-600 font-bold mt-4">
                Offer has ended!
              </p>
            );
          }

          return (
            <p className="text-yellow-500 font-bold mt-4">
              Offer ends in:
              <span> {days}d {hours}h {minutes}m {seconds}s</span>
            </p>
          );
        }}
      />
    </div>
  );
};

export default CountdownTimer;
