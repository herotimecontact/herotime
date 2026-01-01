// Example: How to use the FanWall component

import FanWall from './components/FanWall';

// Basic usage - Shows all fans with default title
export default function BasicExample() {
  return (
    <div>
      <FanWall />
    </div>
  );
}

// Limited fans - Show only latest 12 fans
export default function LimitedExample() {
  return (
    <div>
      <FanWall limit={12} />
    </div>
  );
}

// Without title - More compact display
export default function NoTitleExample() {
  return (
    <div>
      <h1>Our Community</h1>
      <FanWall showTitle={false} limit={20} />
    </div>
  );
}

// Full page example with custom styling
export default function FansPage() {
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
          Meet Our Fans
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#86efac',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Thousands of fans worldwide are counting down together. 
          Join them now!
        </p>
      </div>
      
      {/* Show all fans */}
      <FanWall />
    </div>
  );
}

// Sidebar widget - Small version
export default function SidebarWidget() {
  return (
    <div style={{ 
      background: 'rgba(34, 139, 34, 0.05)',
      padding: '1rem',
      borderRadius: '8px',
      border: '1px solid rgba(34, 139, 34, 0.2)'
    }}>
      <h3 style={{ 
        fontSize: '1.2rem', 
        color: '#4ade80',
        marginBottom: '1rem'
      }}>
        Latest Fans
      </h3>
      <FanWall showTitle={false} limit={6} />
    </div>
  );
}

// Combined with form - Refresh wall after submission
'use client';

import { useState } from 'react';
import FanJoinForm from './components/FanJoinForm';
import FanWall from './components/FanWall';

export default function CombinedExample() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleFanAdded = () => {
    // Force FanWall to refresh by changing key
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div>
      <h1>Join Our Community</h1>
      
      <div style={{ marginBottom: '3rem' }}>
        <FanJoinForm onSuccess={handleFanAdded} />
      </div>
      
      <div key={refreshKey}>
        <FanWall limit={20} />
      </div>
    </div>
  );
}
