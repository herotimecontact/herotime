// Example component demonstrating how to use Firestore functions
// This component shows how to add and fetch fans from the database

'use client';

import { useState, useEffect } from 'react';
import { addFan, fetchFans, getFansCount } from '@/lib/firestore';

export default function FansExample() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    hero: ''
  });
  
  // State for fans list and loading status
  const [fans, setFans] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load fans when component mounts
  useEffect(() => {
    loadFans();
    loadCount();
  }, []);

  // Function to load fans from Firestore
  const loadFans = async () => {
    try {
      setLoading(true);
      const fetchedFans = await fetchFans(10); // Get latest 10 fans
      setFans(fetchedFans);
      setError(null);
    } catch (err) {
      setError('Failed to load fans: ' + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Function to load total fans count
  const loadCount = async () => {
    try {
      const count = await getFansCount();
      setTotalCount(count);
    } catch (err) {
      console.error('Failed to load count:', err);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission to add a new fan
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.country || !formData.hero) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      // Add fan to Firestore
      await addFan({
        name: formData.name,
        country: formData.country,
        hero: formData.hero
      });
      
      // Reset form
      setFormData({ name: '', country: '', hero: '' });
      
      // Reload fans list
      await loadFans();
      await loadCount();
      
      alert('Fan added successfully!');
    } catch (err) {
      setError('Failed to add fan: ' + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '1rem' }}>Fans Database Example</h2>
      <p style={{ color: '#b0b0b0', marginBottom: '2rem' }}>
        Total fans registered: <strong>{totalCount}</strong>
      </p>

      {/* Add Fan Form */}
      <div style={{ 
        background: '#0f0f0f', 
        padding: '2rem', 
        borderRadius: '8px', 
        marginBottom: '2rem',
        border: '1px solid #333'
      }}>
        <h3 style={{ marginBottom: '1rem' }}>Add New Fan</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '0.5rem',
                background: '#1a1a1a',
                border: '1px solid #333',
                borderRadius: '4px',
                color: '#e0e0e0'
              }}
              placeholder="Enter name"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              Country:
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '0.5rem',
                background: '#1a1a1a',
                border: '1px solid #333',
                borderRadius: '4px',
                color: '#e0e0e0'
              }}
              placeholder="Enter country"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              Favorite Hero:
            </label>
            <input
              type="text"
              name="hero"
              value={formData.hero}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '0.5rem',
                background: '#1a1a1a',
                border: '1px solid #333',
                borderRadius: '4px',
                color: '#e0e0e0'
              }}
              placeholder="Enter favorite hero"
            />
          </div>

          {error && (
            <p style={{ color: '#fca5a5', marginBottom: '1rem' }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '0.75rem 2rem',
              background: loading ? '#666' : '#4a9eff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Adding...' : 'Add Fan'}
          </button>
        </form>
      </div>

      {/* Fans List */}
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Recent Fans</h3>
        {loading && <p>Loading fans...</p>}
        {fans.length === 0 && !loading && (
          <p style={{ color: '#888' }}>No fans yet. Be the first to register!</p>
        )}
        {fans.length > 0 && (
          <div style={{ display: 'grid', gap: '1rem' }}>
            {fans.map((fan) => (
              <div
                key={fan.id}
                style={{
                  background: '#0f0f0f',
                  padding: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #333'
                }}
              >
                <h4 style={{ marginBottom: '0.5rem' }}>{fan.name}</h4>
                <p style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
                  Country: {fan.country} | Hero: {fan.hero}
                </p>
                <p style={{ color: '#666', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                  Joined: {fan.createdAt?.toDate().toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
