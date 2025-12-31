// Example: How to use the WorldMap component

import WorldMap from './components/WorldMap';

// Basic usage - Shows all fans on the map
export default function BasicMapExample() {
  return (
    <div>
      <h1>Global Fans</h1>
      <WorldMap />
    </div>
  );
}

// Limited fans - Show only latest 50 fans
export default function LimitedMapExample() {
  return (
    <div>
      <WorldMap maxFans={50} />
    </div>
  );
}

// Full page example with styling
export default function MapPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '3rem' 
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          color: '#4ade80',
          marginBottom: '1rem',
          textShadow: '0 0 20px rgba(34, 139, 34, 0.5)'
        }}>
          Fans Around the World
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#86efac',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          See where our community members are located across the globe.
          Hover over dots to see fan details.
        </p>
      </div>
      
      <WorldMap maxFans={100} />
      
      <div style={{ 
        marginTop: '2rem', 
        textAlign: 'center',
        color: '#86efac'
      }}>
        <p>
          💡 Tip: Larger dots indicate multiple fans from the same region.
          Hover to see individual fan information.
        </p>
      </div>
    </div>
  );
}

// Compact version for dashboard
export default function DashboardMap() {
  return (
    <div style={{
      background: 'rgba(34, 139, 34, 0.05)',
      padding: '1.5rem',
      borderRadius: '12px',
      border: '2px solid rgba(34, 139, 34, 0.2)'
    }}>
      <h3 style={{
        fontSize: '1.2rem',
        color: '#4ade80',
        marginBottom: '1rem'
      }}>
        Live Fan Map
      </h3>
      <WorldMap maxFans={30} />
    </div>
  );
}

// Combined with statistics
'use client';

import { useState, useEffect } from 'react';
import WorldMap from './components/WorldMap';
import { getFansCount } from '@/lib/firestore';

export default function MapWithStats() {
  const [totalFans, setTotalFans] = useState(0);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const count = await getFansCount();
    setTotalFans(count);
  };

  return (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          background: 'rgba(34, 139, 34, 0.1)',
          padding: '1.5rem',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2.5rem', color: '#4ade80', fontWeight: 'bold' }}>
            {totalFans}
          </div>
          <div style={{ color: '#86efac' }}>Total Fans</div>
        </div>
        <div style={{
          background: 'rgba(34, 139, 34, 0.1)',
          padding: '1.5rem',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2.5rem', color: '#4ade80', fontWeight: 'bold' }}>
            🌍
          </div>
          <div style={{ color: '#86efac' }}>Worldwide</div>
        </div>
      </div>
      
      <WorldMap />
    </div>
  );
}
