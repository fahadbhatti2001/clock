import React, { useState, useEffect } from 'react';

export default function DigitalClock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    return (
        <h1 className="text-[12rem] font-bold text-center">
            {hours}:{minutes}:{seconds}
        </h1>
    );
}