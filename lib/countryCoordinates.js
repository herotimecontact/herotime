/**
 * Country Coordinates Mapping
 * Maps country names to approximate latitude/longitude coordinates
 * Used for plotting fans on the world map
 */

export const countryCoordinates = {
  // North America
  'United States': { lat: 37.0902, lng: -95.7129 },
  'Canada': { lat: 56.1304, lng: -106.3468 },
  'Mexico': { lat: 23.6345, lng: -102.5528 },
  
  // Central & South America
  'Brazil': { lat: -14.2350, lng: -51.9253 },
  'Argentina': { lat: -38.4161, lng: -63.6167 },
  'Chile': { lat: -35.6751, lng: -71.5430 },
  'Colombia': { lat: 4.5709, lng: -74.2973 },
  
  // Europe
  'United Kingdom': { lat: 55.3781, lng: -3.4360 },
  'France': { lat: 46.2276, lng: 2.2137 },
  'Germany': { lat: 51.1657, lng: 10.4515 },
  'Italy': { lat: 41.8719, lng: 12.5674 },
  'Spain': { lat: 40.4637, lng: -3.7492 },
  'Netherlands': { lat: 52.1326, lng: 5.2913 },
  'Belgium': { lat: 50.5039, lng: 4.4699 },
  'Switzerland': { lat: 46.8182, lng: 8.2275 },
  'Austria': { lat: 47.5162, lng: 14.5501 },
  'Sweden': { lat: 60.1282, lng: 18.6435 },
  'Norway': { lat: 60.4720, lng: 8.4689 },
  'Denmark': { lat: 56.2639, lng: 9.5018 },
  'Finland': { lat: 61.9241, lng: 25.7482 },
  'Poland': { lat: 51.9194, lng: 19.1451 },
  'Czech Republic': { lat: 49.8175, lng: 15.4730 },
  'Ireland': { lat: 53.4129, lng: -8.2439 },
  'Portugal': { lat: 39.3999, lng: -8.2245 },
  'Greece': { lat: 39.0742, lng: 21.8243 },
  'Russia': { lat: 61.5240, lng: 105.3188 },
  'Ukraine': { lat: 48.3794, lng: 31.1656 },
  'Turkey': { lat: 38.9637, lng: 35.2433 },
  
  // Middle East & Africa
  'Israel': { lat: 31.0461, lng: 34.8516 },
  'Saudi Arabia': { lat: 23.8859, lng: 45.0792 },
  'UAE': { lat: 23.4241, lng: 53.8478 },
  'Egypt': { lat: 26.8206, lng: 30.8025 },
  'South Africa': { lat: -30.5595, lng: 22.9375 },
  'Nigeria': { lat: 9.0820, lng: 8.6753 },
  'Kenya': { lat: -0.0236, lng: 37.9062 },
  
  // Asia
  'Japan': { lat: 36.2048, lng: 138.2529 },
  'South Korea': { lat: 35.9078, lng: 127.7669 },
  'China': { lat: 35.8617, lng: 104.1954 },
  'India': { lat: 20.5937, lng: 78.9629 },
  'Singapore': { lat: 1.3521, lng: 103.8198 },
  'Malaysia': { lat: 4.2105, lng: 101.9758 },
  'Thailand': { lat: 15.8700, lng: 100.9925 },
  'Vietnam': { lat: 14.0583, lng: 108.2772 },
  'Philippines': { lat: 12.8797, lng: 121.7740 },
  'Indonesia': { lat: -0.7893, lng: 113.9213 },
  
  // Oceania
  'Australia': { lat: -25.2744, lng: 133.7751 },
  'New Zealand': { lat: -40.9006, lng: 174.8860 },
  
  // Default for "Other"
  'Other': { lat: 0, lng: 0 }
};

/**
 * Convert latitude/longitude to SVG coordinates
 * Maps to the countries.svg coordinate system (800x387 viewBox)
 * @param {number} lat - Latitude (-90 to 90)
 * @param {number} lng - Longitude (-180 to 180)
 * @param {number} width - SVG viewBox width
 * @param {number} height - SVG viewBox height
 * @returns {Object} - {x, y} coordinates for SVG
 */
export function latLngToXY(lat, lng, width = 800, height = 387) {
  // The countries.svg uses a standard Equirectangular projection
  // Longitude: -180 to 180 maps to 0 to 800
  const x = ((lng + 180) / 360) * width;
  
  // Latitude: 90 to -90 maps to 0 to 387 (inverted Y-axis in SVG)
  const y = ((90 - lat) / 180) * height;
  
  return { x, y };
}

/**
 * Get coordinates for a country
 * @param {string} country - Country name
 * @returns {Object} - {x, y} SVG coordinates or null if not found
 */
export function getCountryCoordinates(country) {
  const coords = countryCoordinates[country];
  if (!coords) {
    console.warn(`No coordinates found for country: ${country}`);
    return null;
  }
  return latLngToXY(coords.lat, coords.lng);
}
