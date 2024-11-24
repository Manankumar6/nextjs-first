'use client';
import React from 'react';
import Countdown from 'react-countdown';

// CountdownTimer component
export const CountdownTimer = ({ durationInDays }) => {

  // Function to calculate the target end date considering the current time
  function getTargetEndDate(durationInDays) {
    const now = new Date();
   
    const targetDate = new Date(now);
    targetDate.setDate(now.getDate() + durationInDays);
   

    // If current time is before the target time, adjust to the current time
    if (now.getHours() < targetDate.getHours()) {
      targetDate.setHours(now.getHours(), now.getMinutes(), now.getSeconds());
    } else {
      // If current time is after the target time, set it to the end of the target day
      targetDate.setHours(23, 59, 59); // End of day
    }
    
    return targetDate;
  }

  const targetDate = getTargetEndDate(durationInDays);
 

  return (
    <div className="text-red-600 text-2xl dark:text-yellow-500 font-semibold mt-4">
    
      <Countdown 
        date={targetDate} 
        daysInHours={true} // Optional: This will show hours in days
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return (
              <p className="text-red-600 font-bold mt-4">
                Offer ends in  : 
                <span>  {days}d {hours}h {minutes}m {seconds}s</span>
              </p>
            );
          }
          // This is the live countdown timer, displayed until the offer ends
          return (
            <p className="text-yellow-500 font-bold mt-4">
              Offer ends in : 
              <span> {days}d {hours}h {minutes}m {seconds}s</span>
            </p>
          );
        }}
      />
    </div>
  );
};

export default CountdownTimer;
