'use client';

import { useState } from 'react';
import FanWall from '../components/FanWall';
import FanJoinForm from '../components/FanJoinForm';
import WorldMap from '../components/WorldMap';

export default function FansPage() {
  const [showForm, setShowForm] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleFanAdded = () => {
    // Refresh the fan wall and map after new fan joins
    setRefreshKey(prev => prev + 1);
    setShowForm(false);
    
    // Scroll to top to see the new fan
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        textAlign: 'center',
        padding: '3rem 1rem',
        background: 'linear-gradient(180deg, #0a0f0a 0%, #1a1a1a 100%)',
        marginBottom: '3rem',
        marginTop: '-2rem',
        marginLeft: '-2rem',
        marginRight: '-2rem',
        borderBottom: '2px solid rgba(34, 139, 34, 0.2)'
      }}>
        <h1 style={{
          fontSize: '3rem',
          color: '#c5e1a5',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(192, 192, 192, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)'
        }}>
          Fan Community
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#c5e1a5',
          maxWidth: '700px',
          margin: '0 auto 2rem'
        }}>
          Join thousands of fans worldwide counting down to Avengers: Doomsday.
          Connect with fellow enthusiasts and be part of something legendary.
        </p>
        
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="join-community-button"
          >
            JOIN THE COMMUNITY
          </button>
        )}
      </div>

      {/* Join Form (conditionally shown) */}
      {showForm && (
        <div style={{
          marginBottom: '3rem',
          animation: 'slideIn 0.3s ease'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '1.5rem'
          }}>
            <h2 style={{ fontSize: '1.5rem', color: '#c5e1a5' }}>
              Join Now
            </h2>
            <button
              onClick={() => setShowForm(false)}
              style={{
                background: 'transparent',
                border: '1px solid rgba(197, 225, 165, 0.3)',
                color: '#c5e1a5',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
          </div>
          <FanJoinForm onSuccess={handleFanAdded} />
        </div>
      )}

      {/* World Map Section */}
      <div style={{ marginBottom: '4rem' }} key={`map-${refreshKey}`}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '2rem',
          textAlign: 'center',
          color: '#c5e1a5',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(192, 192, 192, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)'
        }}>
          Global Fan Network
        </h2>
        <WorldMap />
      </div>

      {/* Fan Wall with key for refresh */}
      <div key={`wall-${refreshKey}`}>
        <FanWall />
      </div>
    </div>
  );
}
