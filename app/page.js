'use client';

import { useState } from 'react';
import Hero from './components/Hero';
import FanJoinForm from './components/FanJoinForm';
import FanWall from './components/FanWall';
import WorldMap from './components/WorldMap';
import FanPoll from './components/FanPoll';
import AdSlot from './components/AdSlot';

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleFanAdded = () => {
    // Refresh Fan Wall and World Map when new fan joins
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div>
      <Hero />
      
      {/* Ad Slot - Below Hero */}
      <AdSlot slot="hero-bottom" format="horizontal" className="ad-hero-bottom" />
      
      {/* Fan Wall Section */}
      <div style={{ marginTop: '4rem', marginBottom: '3rem', overflow: 'visible' }} key={`wall-${refreshKey}`}>
        <FanWall />
      </div>

      <div style={{ marginTop: '4rem', marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '1rem',
          textAlign: 'center',
          color: '#c5e1a5'
        }}>
          Join the Experience
        </h2>
        <p style={{ 
          textAlign: 'center', 
          color: '#c5e1a5', 
          marginBottom: '2rem',
          fontSize: '1.1rem'
        }}>
          Be part of the countdown. Share your excitement with fans worldwide.
        </p>
        <FanJoinForm onSuccess={handleFanAdded} />
      </div>

      {/* Fan Poll Section */}
      <div style={{ marginTop: '5rem', marginBottom: '4rem' }}>
        <FanPoll />
      </div>

      {/* World Map Section */}
      <div style={{ marginTop: '5rem', marginBottom: '4rem' }} key={`map-${refreshKey}`}>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          color: '#c5e1a5',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(192, 192, 192, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)'
        }}>
          Global Fan Network
        </h2>
        <WorldMap maxFans={100} />
      </div>
      
      {/* Ad Slot - Page Bottom */}
      <AdSlot slot="page-bottom" format="rectangle" className="ad-page-bottom" />
      
      <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
        <h2 className="about-section-title" style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#c5e1a5' }}>About Avengers: Doomsday</h2>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1rem' }}>
          As the countdown to December 18, 2026 continues, fans from around the world are coming together to share their excitement, anticipation, and love for the stories and characters that have inspired generations.
        </p>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1rem' }}>
          This fan-made platform allows you to join a global community by participating in polls, exploring the interactive world map, and seeing how fans everywhere are counting down to the same moment.
        </p>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1rem' }}>
          The clock is ticking.
        </p>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', fontStyle: 'italic' }}>
          When the countdown reaches zero — where will you be?
        </p>
      </div>
    </div>
  );
}
