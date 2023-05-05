import React, { useState, useEffect } from 'react';
import moment from 'moment';

function DigitalClock() {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const timeString = currentTime.format('h:mm:ss a');

  return (
    <div className="text-[12rem] font-bold text-center uppercase">
      {timeString}
    </div>
  );
}

export default DigitalClock;
