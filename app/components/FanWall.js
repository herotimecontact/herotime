'use client';

import { useState, useEffect } from 'react';
import { fetchFans } from '@/lib/firestore';

/**
 * Get character-specific color based on hero/villain
 * @param {string} hero - Hero name
 * @returns {string} - RGB color string in lite shade
 */
function getHeroColor(hero) {
  const heroLower = hero.toLowerCase();
  
  // Heroes with specific colors
  if (heroLower.includes('iron man')) return 'rgba(255, 215, 0, 0.5)'; // Gold
  if (heroLower.includes('captain america')) return 'rgba(70, 130, 180, 0.5)'; // Steel Blue
  if (heroLower.includes('thor')) return 'rgba(135, 206, 235, 0.5)'; // Sky Blue
  if (heroLower.includes('hulk')) return 'rgba(50, 205, 50, 0.5)'; // Lime Green
  if (heroLower.includes('black widow')) return 'rgba(220, 20, 60, 0.5)'; // Crimson
  if (heroLower.includes('black panther')) return 'rgba(138, 43, 226, 0.5)'; // Purple
  if (heroLower.includes('spider-man') || heroLower.includes('spiderman')) return 'rgba(220, 20, 60, 0.5)'; // Red
  if (heroLower.includes('doctor strange')) return 'rgba(255, 140, 0, 0.5)'; // Orange
  if (heroLower.includes('scarlet witch')) return 'rgba(220, 20, 60, 0.5)'; // Scarlet
  if (heroLower.includes('vision')) return 'rgba(255, 215, 0, 0.5)'; // Yellow/Gold
  if (heroLower.includes('ant-man')) return 'rgba(220, 20, 60, 0.5)'; // Red
  if (heroLower.includes('wasp')) return 'rgba(255, 215, 0, 0.5)'; // Yellow
  if (heroLower.includes('captain marvel')) return 'rgba(255, 215, 0, 0.5)'; // Gold/Red
  if (heroLower.includes('star-lord')) return 'rgba(220, 20, 60, 0.5)'; // Red
  if (heroLower.includes('gamora')) return 'rgba(50, 205, 50, 0.5)'; // Green
  if (heroLower.includes('groot')) return 'rgba(139, 69, 19, 0.5)'; // Brown/Green
  if (heroLower.includes('rocket')) return 'rgba(255, 140, 0, 0.5)'; // Orange
  if (heroLower.includes('drax')) return 'rgba(50, 205, 50, 0.5)'; // Green
  if (heroLower.includes('hawkeye')) return 'rgba(138, 43, 226, 0.5)'; // Purple
  if (heroLower.includes('falcon')) return 'rgba(220, 20, 60, 0.5)'; // Red
  if (heroLower.includes('winter soldier')) return 'rgba(128, 128, 128, 0.5)'; // Gray
  if (heroLower.includes('war machine')) return 'rgba(128, 128, 128, 0.5)'; // Gray
  if (heroLower.includes('shang-chi')) return 'rgba(255, 215, 0, 0.5)'; // Gold
  if (heroLower.includes('she-hulk')) return 'rgba(50, 205, 50, 0.5)'; // Green
  if (heroLower.includes('daredevil')) return 'rgba(220, 20, 60, 0.5)'; // Red
  if (heroLower.includes('wolverine')) return 'rgba(255, 215, 0, 0.5)'; // Yellow
  if (heroLower.includes('deadpool')) return 'rgba(220, 20, 60, 0.5)'; // Red
  if (heroLower.includes('storm')) return 'rgba(255, 255, 255, 0.5)'; // White
  if (heroLower.includes('cyclops')) return 'rgba(255, 0, 0, 0.5)'; // Red
  if (heroLower.includes('jean grey')) return 'rgba(255, 140, 0, 0.5)'; // Orange/Phoenix
  if (heroLower.includes('magneto')) return 'rgba(138, 43, 226, 0.5)'; // Purple
  
  // Villains
  if (heroLower.includes('thanos')) return 'rgba(138, 43, 226, 0.5)'; // Purple
  if (heroLower.includes('loki')) return 'rgba(50, 205, 50, 0.5)'; // Green
  if (heroLower.includes('ultron')) return 'rgba(220, 20, 60, 0.5)'; // Red
  if (heroLower.includes('hela')) return 'rgba(0, 100, 0, 0.5)'; // Dark Green
  if (heroLower.includes('killmonger')) return 'rgba(255, 215, 0, 0.5)'; // Gold
  if (heroLower.includes('red skull')) return 'rgba(220, 20, 60, 0.5)'; // Red
  if (heroLower.includes('green goblin')) return 'rgba(50, 205, 50, 0.5)'; // Green
  if (heroLower.includes('doctor doom')) return 'rgba(50, 205, 50, 0.5)'; // Green
  if (heroLower.includes('venom')) return 'rgba(0, 0, 0, 0.6)'; // Black
  if (heroLower.includes('carnage')) return 'rgba(220, 20, 60, 0.5)'; // Red
  if (heroLower.includes('kang')) return 'rgba(70, 130, 180, 0.5)'; // Blue
  if (heroLower.includes('dormammu')) return 'rgba(138, 43, 226, 0.5)'; // Purple
  if (heroLower.includes('mysterio')) return 'rgba(50, 205, 50, 0.5)'; // Green
  if (heroLower.includes('vulture')) return 'rgba(50, 205, 50, 0.5)'; // Green
  if (heroLower.includes('electro')) return 'rgba(255, 215, 0, 0.5)'; // Yellow
  if (heroLower.includes('sandman')) return 'rgba(210, 180, 140, 0.5)'; // Tan
  if (heroLower.includes('abomination')) return 'rgba(50, 205, 50, 0.5)'; // Green
  
  // Default for unknown heroes
  return 'rgba(134, 239, 172, 0.5)'; // Light green theme
}

/**
 * Get initials from a name (first letter of first two words)
 * @param {string} name - Full name
 * @returns {string} - Initials (max 2 characters)
 */
function getInitials(name) {
  if (!name || name === 'Anonymous') return '?';
  
  const words = name.trim().split(' ');
  if (words.length === 1) {
    return words[0][0].toUpperCase();
  }
  
  return (words[0][0] + words[1][0]).toUpperCase();
}

/**
 * Get icon letter based on hero name (first letter)
 * @param {string} hero - Hero name
 * @returns {string} - First letter of hero name
 */
function getHeroIcon(hero) {
  if (!hero || hero === 'Not specified') return '★';
  return hero.trim()[0].toUpperCase();
}

/**
 * Fan Card Component
 * Displays individual fan with avatar and info
 */
function FanCard({ fan }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const heroColor = getHeroColor(fan.hero);
  const heroIcon = getHeroIcon(fan.hero);
  
  return (
    <div 
      className="fan-card"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Avatar with hero-based color */}
      <div 
        className="fan-avatar"
        style={{ 
          background: `linear-gradient(135deg, ${heroColor}, ${heroColor.replace('0.5', '0.3')})`,
          boxShadow: `0 0 20px ${heroColor}`
        }}
      >
        <span className="fan-hero-icon">{heroIcon}</span>
      </div>
      
      {/* Fan Info */}
      <div className="fan-info">
        <div className="fan-name">{fan.name || 'Anonymous'}</div>
        <div className="fan-country">{fan.country}</div>
      </div>
      
      {/* Hover Tooltip */}
      {showTooltip && (
        <div className="fan-tooltip">
          <div className="tooltip-row">
            <strong>Name:</strong> {fan.name || 'Anonymous'}
          </div>
          <div className="tooltip-row">
            <strong>Country:</strong> {fan.country}
          </div>
          <div className="tooltip-row">
            <strong>Hero:</strong> {fan.hero}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Fan Wall Component
 * Displays a grid of all fans from Firestore
 */
export default function FanWall({ limit = null, showTitle = true }) {
  // State for fans data
  const [fans, setFans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch fans from Firestore on component mount
  useEffect(() => {
    loadFans();
  }, [limit]);

  /**
   * Load fans from Firestore database
   * Uses fetchFans function from firestore.js
   */
  const loadFans = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch fans (with optional limit)
      const fetchedFans = await fetchFans(limit);
      setFans(fetchedFans);
      
    } catch (err) {
      console.error('Error loading fans:', err);
      setError('Failed to load fans. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="fan-wall">
        {showTitle && <h2 className="fan-wall-title">Fan Wall</h2>}
        <div className="fan-wall-loading">
          <div className="loading-spinner"></div>
          <p>Loading fans...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="fan-wall">
        {showTitle && <h2 className="fan-wall-title">Fan Wall</h2>}
        <div className="fan-wall-error">
          <p>{error}</p>
          <button onClick={loadFans} className="retry-button">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Empty state
  if (fans.length === 0) {
    return (
      <div className="fan-wall">
        {showTitle && <h2 className="fan-wall-title">Fan Wall</h2>}
        <div className="fan-wall-empty">
          <p>No fans yet. Be the first to join!</p>
        </div>
      </div>
    );
  }

  // Render fan grid
  return (
    <div className="fan-wall">
      {showTitle && (
        <div className="fan-wall-header">
          <h2 className="fan-wall-title">Fan Wall</h2>
          <p className="fan-wall-count">{fans.length} {fans.length === 1 ? 'Fan' : 'Fans'}</p>
        </div>
      )}
      
      {/* Responsive grid of fan cards */}
      <div className="fan-wall-grid">
        {fans.map((fan) => (
          <FanCard key={fan.id} fan={fan} />
        ))}
      </div>
      
      {/* Show refresh button if data might be stale */}
      <div className="fan-wall-footer">
        <button onClick={loadFans} className="refresh-button">
          REFRESH WALL
        </button>
      </div>
    </div>
  );
}
