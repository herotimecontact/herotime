'use client';

import { useState } from 'react';
import { addFan } from '@/lib/firestore';

/**
 * Fan Join Form Component
 * Allows users to register and join the fan community
 * Stores data in Firebase Firestore
 */
export default function FanJoinForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    hero: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return;
    }
    
    if (!formData.country.trim()) {
      setError('Please select your country');
      return;
    }

    try {
      setLoading(true);
      setError('');
      
      // Add fan to Firestore
      await addFan({
        name: formData.name.trim(),
        country: formData.country,
        hero: formData.hero.trim() || 'Not specified'
      });
      
      setSuccess(true);
      
      // Call success callback if provided
      if (onSuccess) {
        onSuccess(formData);
      }
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ name: '', country: '', hero: '' });
        setSuccess(false);
      }, 2000);
      
    } catch (err) {
      console.error('Error adding fan:', err);
      setError('Failed to join. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="fan-join-form">
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          background: 'rgba(34, 139, 34, 0.1)',
          border: '2px solid rgba(74, 222, 128, 0.4)',
          borderRadius: '12px',
          animation: 'fadeIn 0.3s ease'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
          <h3 style={{ 
            color: '#4ade80', 
            marginBottom: '0.5rem',
            fontSize: '1.5rem'
          }}>
            Welcome to the Community!
          </h3>
          <p style={{ color: '#86efac' }}>
            You've successfully joined the countdown experience.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fan-join-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            disabled={loading}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">
            Country <span className="required">*</span>
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            disabled={loading}
            required
          >
            <option value="">Select your country</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="India">India</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
            <option value="Mexico">Mexico</option>
            <option value="Spain">Spain</option>
            <option value="Italy">Italy</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Sweden">Sweden</option>
            <option value="Norway">Norway</option>
            <option value="Denmark">Denmark</option>
            <option value="Finland">Finland</option>
            <option value="Poland">Poland</option>
            <option value="Russia">Russia</option>
            <option value="China">China</option>
            <option value="South Korea">South Korea</option>
            <option value="Singapore">Singapore</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Argentina">Argentina</option>
            <option value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="Peru">Peru</option>
            <option value="South Africa">South Africa</option>
            <option value="Egypt">Egypt</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Kenya">Kenya</option>
            <option value="Turkey">Turkey</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Israel">Israel</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="hero">
            Favorite Hero <span className="optional">(optional)</span>
          </label>
          <select
            id="hero"
            name="hero"
            value={formData.hero}
            onChange={handleChange}
            disabled={loading}
          >
            <option value="">Select your favorite character</option>
            <optgroup label="Heroes">
              <option value="Iron Man">Iron Man</option>
              <option value="Captain America">Captain America</option>
              <option value="Thor">Thor</option>
              <option value="Hulk">Hulk</option>
              <option value="Black Widow">Black Widow</option>
              <option value="Hawkeye">Hawkeye</option>
              <option value="Spider-Man">Spider-Man</option>
              <option value="Black Panther">Black Panther</option>
              <option value="Doctor Strange">Doctor Strange</option>
              <option value="Scarlet Witch">Scarlet Witch</option>
              <option value="Vision">Vision</option>
              <option value="War Machine">War Machine</option>
              <option value="Falcon">Falcon</option>
              <option value="Winter Soldier">Winter Soldier</option>
              <option value="Ant-Man">Ant-Man</option>
              <option value="Wasp">Wasp</option>
              <option value="Captain Marvel">Captain Marvel</option>
              <option value="Star-Lord">Star-Lord</option>
              <option value="Gamora">Gamora</option>
              <option value="Drax">Drax</option>
              <option value="Rocket Raccoon">Rocket Raccoon</option>
              <option value="Groot">Groot</option>
              <option value="Mantis">Mantis</option>
              <option value="Nebula">Nebula</option>
              <option value="Shang-Chi">Shang-Chi</option>
              <option value="She-Hulk">She-Hulk</option>
              <option value="Ms. Marvel">Ms. Marvel</option>
              <option value="Moon Knight">Moon Knight</option>
              <option value="Daredevil">Daredevil</option>
              <option value="Jessica Jones">Jessica Jones</option>
              <option value="Luke Cage">Luke Cage</option>
              <option value="Iron Fist">Iron Fist</option>
              <option value="Punisher">Punisher</option>
              <option value="Blade">Blade</option>
              <option value="Deadpool">Deadpool</option>
              <option value="Wolverine">Wolverine</option>
              <option value="Professor X">Professor X</option>
              <option value="Cyclops">Cyclops</option>
              <option value="Storm">Storm</option>
              <option value="Jean Grey">Jean Grey</option>
              <option value="Rogue">Rogue</option>
              <option value="Magneto">Magneto</option>
              <option value="Nick Fury">Nick Fury</option>
              <option value="Maria Hill">Maria Hill</option>
              <option value="Pepper Potts">Pepper Potts</option>
              <option value="Happy Hogan">Happy Hogan</option>
              <option value="Wong">Wong</option>
              <option value="Okoye">Okoye</option>
              <option value="Shuri">Shuri</option>
              <option value="Valkyrie">Valkyrie</option>
              <option value="Heimdall">Heimdall</option>
              <option value="Loki">Loki (Hero)</option>
            </optgroup>
            <optgroup label="Villains">
              <option value="Thanos">Thanos</option>
              <option value="Loki (Villain)">Loki (Villain)</option>
              <option value="Ultron">Ultron</option>
              <option value="Hela">Hela</option>
              <option value="Killmonger">Killmonger</option>
              <option value="Red Skull">Red Skull</option>
              <option value="Winter Soldier (Villain)">Winter Soldier (Villain)</option>
              <option value="Zemo">Zemo</option>
              <option value="Ronan">Ronan</option>
              <option value="Ego">Ego</option>
              <option value="Malekith">Malekith</option>
              <option value="Yellowjacket">Yellowjacket</option>
              <option value="Ghost">Ghost</option>
              <option value="Kaecilius">Kaecilius</option>
              <option value="Dormammu">Dormammu</option>
              <option value="Vulture">Vulture</option>
              <option value="Mysterio">Mysterio</option>
              <option value="Green Goblin">Green Goblin</option>
              <option value="Doctor Octopus">Doctor Octopus</option>
              <option value="Sandman">Sandman</option>
              <option value="Electro">Electro</option>
              <option value="Lizard">Lizard</option>
              <option value="Venom">Venom</option>
              <option value="Carnage">Carnage</option>
              <option value="Kingpin">Kingpin</option>
              <option value="Bullseye">Bullseye</option>
              <option value="Kilgrave">Kilgrave</option>
              <option value="Abomination">Abomination</option>
              <option value="Leader">Leader</option>
              <option value="Mandarin">Mandarin</option>
              <option value="Aldrich Killian">Aldrich Killian</option>
              <option value="Whiplash">Whiplash</option>
              <option value="Justin Hammer">Justin Hammer</option>
              <option value="Obadiah Stane">Obadiah Stane</option>
              <option value="Crossbones">Crossbones</option>
              <option value="Alexander Pierce">Alexander Pierce</option>
              <option value="Arnim Zola">Arnim Zola</option>
              <option value="Taskmaster">Taskmaster</option>
              <option value="Agatha Harkness">Agatha Harkness</option>
              <option value="Wenwu">Wenwu</option>
              <option value="Xu Xialing">Xu Xialing</option>
              <option value="Gorr">Gorr the God Butcher</option>
              <option value="Kang">Kang the Conqueror</option>
              <option value="MODOK">MODOK</option>
              <option value="Galactus">Galactus</option>
              <option value="Doctor Doom">Doctor Doom</option>
            </optgroup>
          </select>
        </div>

        {error && (
          <div style={{
            padding: '0.75rem',
            background: 'rgba(220, 38, 38, 0.1)',
            border: '1px solid rgba(220, 38, 38, 0.3)',
            borderRadius: '6px',
            color: '#fca5a5',
            fontSize: '0.9rem',
            marginBottom: '1rem'
          }}>
            {error}
          </div>
        )}

        <button 
          type="submit" 
          disabled={loading}
          className="join-submit-button"
        >
          {loading ? 'JOINING...' : 'JOIN THE COUNTDOWN'}
        </button>
      </form>
    </div>
  );
}
