'use client';

import { useState, useEffect } from 'react';

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    // Calculate time remaining
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      // If countdown is complete
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
        };
      }

      // Calculate time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds,
        isExpired: false
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // Stop interval when countdown expires
      if (newTimeLeft.isExpired) {
        clearInterval(timer);
      }
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <div className="countdown-grid">
        <div className="countdown-unit">
          <div className="countdown-value">{String(timeLeft.days).padStart(2, '0')}</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-unit">
          <div className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-unit">
          <div className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-unit">
          <div className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>
      {timeLeft.isExpired && (
        <div className="countdown-expired">The countdown has ended</div>
      )}
    </div>
  );
}
