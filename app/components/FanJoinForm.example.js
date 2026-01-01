// Example: How to use the FanJoinForm component

import FanJoinForm from './components/FanJoinForm';

// Basic usage - Just drop it into any page
export default function YourPage() {
  return (
    <div>
      <h1>Join Our Community</h1>
      <FanJoinForm />
    </div>
  );
}

// With success callback
export default function YourPageWithCallback() {
  const handleSuccess = (fanData) => {
    console.log('New fan joined:', fanData);
    // You can update a counter, show a notification, etc.
  };

  return (
    <div>
      <h1>Join Our Community</h1>
      <FanJoinForm onSuccess={handleSuccess} />
    </div>
  );
}

// Full page example with styling
export default function JoinPage() {
  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '2rem' 
    }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          color: '#4ade80',
          marginBottom: '1rem'
        }}>
          Join the Countdown
        </h1>
        <p style={{ 
          color: '#86efac', 
          fontSize: '1.1rem',
          lineHeight: '1.6'
        }}>
          Connect with fans worldwide and be part of something epic.
        </p>
      </div>
      
      <FanJoinForm onSuccess={(data) => {
        // Redirect to thank you page or show modal
        alert(`Welcome ${data.name || 'Anonymous'}!`);
      }} />
    </div>
  );
}
