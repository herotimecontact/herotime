'use client';

import Countdown from './Countdown';

export default function Hero() {
  // Target date: December 18, 2026 at 00:00:00
  const targetDate = '2026-12-18T00:00:00';

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">Coming Soon</div>
        <h1 className="hero-title">Avengers: Doomsday</h1>
        <p className="hero-subtitle">The Ultimate Fan Countdown</p>
        <Countdown targetDate={targetDate} />
      </div>
      <div className="hero-glow"></div>
    </section>
  );
}
