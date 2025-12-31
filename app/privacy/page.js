export const metadata = {
  title: "Privacy Policy | HeroTime",
  description: "Learn how HeroTime collects, uses, and protects your data. Information about cookies, Google AdSense, and Firebase Firestore usage.",
};

export default function Privacy() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '1rem', 
        color: '#c5e1a5',
        textAlign: 'center'
      }}>
        Privacy Policy
      </h1>
      
      <p style={{ 
        textAlign: 'center', 
        color: '#c5e1a5', 
        marginBottom: '2rem',
        fontSize: '0.95rem'
      }}>
        Last Updated: January 01, 2026
      </p>

      <div style={{ 
        backgroundColor: 'rgba(20, 30, 20, 0.3)', 
        border: '1px solid rgba(74, 222, 128, 0.2)',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '2rem'
      }}>
        <p style={{ 
          fontSize: '1.05rem', 
          color: '#e0e0e0', 
          lineHeight: '1.7',
          margin: 0
        }}>
          HeroTime respects your privacy. This Privacy Policy explains how information is collected, used, and protected when you use this website.
        </p>
      </div>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#c5e1a5', marginBottom: '1rem' }}>
          1. Information We Collect
        </h2>
        
        <h3 style={{ fontSize: '1.4rem', color: '#c5e1a5', marginBottom: '0.8rem', marginTop: '1.5rem' }}>
          1.1 Information You Provide
        </h3>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1rem' }}>
          When you choose to participate in fan features, we may collect:
        </p>
        <ul style={{ color: '#e0e0e0', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          <li>Display name or alias (optional)</li>
          <li>Country selection (for map visualization)</li>
          <li>Favorite hero or selection choice</li>
          <li>Timestamp of participation</li>
        </ul>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1.5rem' }}>
          We do not require email addresses, phone numbers, or real photographs to use core features.
        </p>

        <h3 style={{ fontSize: '1.4rem', color: '#c5e1a5', marginBottom: '0.8rem' }}>
          1.2 Poll Participation
        </h3>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1rem' }}>
          When you participate in polls:
        </p>
        <ul style={{ color: '#e0e0e0', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          <li>Your selection is recorded</li>
          <li>Session-based storage may be used locally in your browser to prevent duplicate voting</li>
        </ul>

        <h3 style={{ fontSize: '1.4rem', color: '#c5e1a5', marginBottom: '0.8rem' }}>
          1.3 Automatically Processed Information
        </h3>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1rem' }}>
          Third-party services used on this site may process technical information such as:
        </p>
        <ul style={{ color: '#e0e0e0', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Pages visited</li>
          <li>General location data (non-precise)</li>
        </ul>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1.5rem' }}>
          This information is processed according to the policies of those services.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#c5e1a5', marginBottom: '1rem' }}>
          2. Cookies & Advertising
        </h2>
        
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1rem' }}>
          HeroTime uses Google AdSense to display advertisements.
        </p>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1rem' }}>
          Google and its partners may use cookies or similar technologies to show ads based on user interests.
        </p>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1rem' }}>
          Users can manage or opt out of personalized advertising through{' '}
          <a 
            href="https://www.google.com/settings/ads" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#c5e1a5', textDecoration: 'underline' }}
          >
            Google Ads Settings
          </a>.
        </p>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1rem' }}>
          Learn more:
        </p>
        <ul style={{ color: '#e0e0e0', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          <li>
            <a 
              href="https://policies.google.com/technologies/ads" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#c5e1a5', textDecoration: 'underline' }}
            >
              https://policies.google.com/technologies/ads
            </a>
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#c5e1a5', marginBottom: '1rem' }}>
          3. Data Storage & Security
        </h2>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1rem' }}>
          Fan interaction data is stored using Firebase Firestore with secure transmission (HTTPS).
        </p>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1.5rem' }}>
          We apply reasonable measures to protect data but cannot guarantee absolute security.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#c5e1a5', marginBottom: '1rem' }}>
          4. Your Choices
        </h2>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1rem' }}>
          You can:
        </p>
        <ul style={{ color: '#e0e0e0', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          <li>Manage cookies via browser settings</li>
          <li>Control ad personalization through Google</li>
          <li>Request removal of your displayed fan entry via the <a href="/contact" style={{ color: '#c5e1a5', textDecoration: 'underline' }}>Contact page</a></li>
        </ul>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#c5e1a5', marginBottom: '1rem' }}>
          5. Independent Fan Disclaimer
        </h2>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1.5rem' }}>
          HeroTime is an independent fan-made platform and is not affiliated with or endorsed by any copyright holder.
        </p>
      </section>

      <div style={{
        backgroundColor: 'rgba(197, 225, 165, 0.1)',
        border: '1px solid rgba(197, 225, 165, 0.3)',
        borderRadius: '8px',
        padding: '1.5rem',
        marginTop: '3rem',
        textAlign: 'center'
      }}>
        <p style={{ lineHeight: '1.8', color: '#c5e1a5', margin: 0 }}>
          By using HeroTime, you acknowledge that you have read and understood this Privacy Policy.
        </p>
      </div>
    </div>
  );
}
