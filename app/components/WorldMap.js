'use client';

import { useState, useEffect } from 'react';
import { fetchFans } from '@/lib/firestore';
import { getCountryCoordinates } from '@/lib/countryCoordinates';

/**
 * World Map Component
 * Displays a static SVG world map with glowing dots for each fan location
 * Lightweight implementation without external map APIs
 */
export default function WorldMap({ maxFans = 100 }) {
  const [fans, setFans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredFans, setHoveredFans] = useState(null); // Changed to store array of fans
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // SVG viewBox dimensions - matches countries.svg
  const SVG_WIDTH = 800;
  const SVG_HEIGHT = 387;

  // Load fans from Firestore
  useEffect(() => {
    loadFans();
  }, [maxFans]);

  const loadFans = async () => {
    try {
      setLoading(true);
      const fetchedFans = await fetchFans(maxFans);
      
      // Add coordinates to each fan
      const fansWithCoords = fetchedFans
        .map(fan => ({
          ...fan,
          coords: getCountryCoordinates(fan.country)
        }))
        .filter(fan => fan.coords !== null); // Remove fans without valid coordinates
      
      setFans(fansWithCoords);
    } catch (err) {
      console.error('Error loading fans for map:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle dot hover with boundary checking
  const handleDotHover = (groupFans, event) => {
    const svg = event.currentTarget.closest('svg');
    const rect = svg.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Convert screen coordinates to SVG viewBox coordinates
    const svgX = (x / rect.width) * SVG_WIDTH;
    const svgY = (y / rect.height) * SVG_HEIGHT;
    
    // Tooltip dimensions - dynamic based on number of fans
    const tooltipWidth = 200;
    const lineHeight = 18;
    const headerHeight = 25;
    const tooltipHeight = headerHeight + (groupFans.length * lineHeight) + 10;
    const padding = 10;
    
    // Adjust position to keep tooltip within SVG bounds
    let adjustedX = svgX + padding;
    let adjustedY = svgY - tooltipHeight - padding;
    
    // Check right boundary
    if (adjustedX + tooltipWidth > SVG_WIDTH) {
      adjustedX = svgX - tooltipWidth - padding;
    }
    
    // Check top boundary
    if (adjustedY < 0) {
      adjustedY = svgY + padding;
    }
    
    // Check bottom boundary
    if (adjustedY + tooltipHeight > SVG_HEIGHT) {
      adjustedY = SVG_HEIGHT - tooltipHeight - padding;
    }
    
    // Check left boundary
    if (adjustedX < 0) {
      adjustedX = padding;
    }
    
    setHoveredFans(groupFans);
    setTooltipPos({ x: adjustedX, y: adjustedY });
  };

  const handleDotLeave = () => {
    setHoveredFans(null);
  };

  // Group fans by location for clustering
  const groupFansByLocation = () => {
    const grouped = {};
    
    fans.forEach(fan => {
      const key = `${fan.coords.x.toFixed(0)},${fan.coords.y.toFixed(0)}`;
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(fan);
    });
    
    return grouped;
  };

  const fanGroups = groupFansByLocation();

  if (loading) {
    return (
      <div className="world-map-container">
        <div className="map-loading">
          <div className="loading-spinner"></div>
          <p>Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="world-map-container">
      <svg
        className="world-map-svg"
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background */}
        <rect 
          width={SVG_WIDTH} 
          height={SVG_HEIGHT} 
          fill="rgba(10, 15, 10, 0.5)"
        />
        
        {/* World map from countries.svg */}
        <image
          href="/countries.svg"
          width={SVG_WIDTH}
          height={SVG_HEIGHT}
          opacity="0.3"
          style={{ filter: 'hue-rotate(90deg) saturate(0.5)' }}
        />
        
        {/* Grid lines for reference */}
        <g className="map-grid" opacity="0.1">
          {/* Latitude lines */}
          {[0, 97, 194, 291, 387].map(y => (
            <line
              key={`lat-${y}`}
              x1="0"
              y1={y}
              x2={SVG_WIDTH}
              y2={y}
              stroke="rgba(34, 139, 34, 0.5)"
              strokeWidth="0.5"
            />
          ))}
          {/* Longitude lines */}
          {[0, 160, 320, 480, 640, 800].map(x => (
            <line
              key={`lng-${x}`}
              x1={x}
              y1="0"
              x2={x}
              y2={SVG_HEIGHT}
              stroke="rgba(34, 139, 34, 0.5)"
              strokeWidth="0.5"
            />
          ))}
        </g>
        
        {/* Fan location dots with glow effect */}
        <g className="fan-dots">
          {Object.entries(fanGroups).map(([key, groupFans]) => {
            const fan = groupFans[0]; // Use first fan for position
            const count = groupFans.length;
            const radius = Math.min(3 + count, 8); // Larger radius for more fans
            
            return (
              <g key={key}>
                {/* Glow effect (multiple circles) */}
                <circle
                  cx={fan.coords.x}
                  cy={fan.coords.y}
                  r={radius + 8}
                  fill="rgba(34, 139, 34, 0.1)"
                  className="fan-dot-glow"
                />
                <circle
                  cx={fan.coords.x}
                  cy={fan.coords.y}
                  r={radius + 4}
                  fill="rgba(34, 139, 34, 0.2)"
                  className="fan-dot-glow"
                />
                
                {/* Main dot */}
                <circle
                  cx={fan.coords.x}
                  cy={fan.coords.y}
                  r={radius}
                  fill="#4ade80"
                  className="fan-dot"
                  onMouseEnter={(e) => handleDotHover(groupFans, e)}
                  onMouseLeave={handleDotLeave}
                  style={{ cursor: 'pointer' }}
                />
                
                {/* Count badge for clusters */}
                {count > 1 && (
                  <text
                    x={fan.coords.x}
                    y={fan.coords.y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#0a0f0a"
                    fontSize="8"
                    fontWeight="bold"
                    pointerEvents="none"
                  >
                    {count}
                  </text>
                )}
              </g>
            );
          })}
        </g>
        
        {/* Tooltip inside SVG */}
        {hoveredFans && (
          <g className="map-tooltip-svg" transform={`translate(${tooltipPos.x}, ${tooltipPos.y})`}>
            <rect
              x="0"
              y="0"
              width="200"
              height={25 + (hoveredFans.length * 18) + 10}
              rx="8"
              fill="rgba(10, 15, 10, 0.95)"
              stroke="rgba(34, 139, 34, 0.6)"
              strokeWidth="2"
            />
            <text x="10" y="18" fill="#4ade80" fontSize="12" fontWeight="bold">
              {hoveredFans[0].country} ({hoveredFans.length})
            </text>
            {hoveredFans.map((fan, index) => (
              <text 
                key={index}
                x="10" 
                y={35 + (index * 18)} 
                fill="#86efac" 
                fontSize="10"
              >
                {fan.name || 'Anonymous'} - {fan.hero}
              </text>
            ))}
          </g>
        )}
      </svg>
      
      {/* Map info */}
      <div className="map-info">
        <span className="map-info-icon">🌍</span>
        <span className="map-info-text">
          {fans.length} {fans.length === 1 ? 'fan' : 'fans'} from around the world
        </span>
      </div>
    </div>
  );
}
