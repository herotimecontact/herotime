export const metadata = {
  title: "About HeroTime | Fan-Made Countdown Platform",
  description: "Learn about HeroTime, an independent fan-made countdown platform celebrating major entertainment events with a global community.",
};

export default function About() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '1rem', 
        color: '#c5e1a5',
        textAlign: 'center'
      }}>
        About HeroTime
      </h1>
      
      <div style={{ 
        backgroundColor: 'rgba(20, 30, 20, 0.3)', 
        border: '1px solid rgba(74, 222, 128, 0.2)',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '2rem'
      }}>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#c5e1a5', 
          textAlign: 'center',
          margin: 0
        }}>
          HeroTime is an independent, fan-made countdown platform created by enthusiasts who enjoy tracking major upcoming entertainment events and sharing the excitement with a global fan community.
        </p>
      </div>

      <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '2rem' }}>
        This website is designed to bring fans together by offering a real-time countdown experience along with interactive features such as polls, global participation maps, and community highlights.
      </p>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#c5e1a5', marginBottom: '1rem' }}>
          What We Do
        </h2>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1rem' }}>
          HeroTime allows fans to:
        </p>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0,
          color: '#e0e0e0'
        }}>
          <li style={{ 
            padding: '0.8rem 1rem', 
            marginBottom: '0.5rem',
            backgroundColor: 'rgba(20, 30, 20, 0.3)',
            borderLeft: '3px solid #c5e1a5',
            borderRadius: '4px'
          }}>
            ✓ Track upcoming release dates in real time
          </li>
          <li style={{ 
            padding: '0.8rem 1rem', 
            marginBottom: '0.5rem',
            backgroundColor: 'rgba(20, 30, 20, 0.3)',
            borderLeft: '3px solid #c5e1a5',
            borderRadius: '4px'
          }}>
            ✓ Participate in community polls and interactions
          </li>
          <li style={{ 
            padding: '0.8rem 1rem', 
            marginBottom: '0.5rem',
            backgroundColor: 'rgba(20, 30, 20, 0.3)',
            borderLeft: '3px solid #c5e1a5',
            borderRadius: '4px'
          }}>
            ✓ Visualize global fan participation on an interactive map
          </li>
          <li style={{ 
            padding: '0.8rem 1rem', 
            marginBottom: '0.5rem',
            backgroundColor: 'rgba(20, 30, 20, 0.3)',
            borderLeft: '3px solid #c5e1a5',
            borderRadius: '4px'
          }}>
            ✓ Share favorite heroes and preferences in a fun, non-intrusive way
          </li>
        </ul>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginTop: '1rem' }}>
          Our focus is on creating a clean, immersive, and spoiler-free experience.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#c5e1a5', marginBottom: '1rem' }}>
          Fan-Made & Independent
        </h2>
        <div style={{
          backgroundColor: 'rgba(255, 215, 0, 0.1)',
          border: '1px solid rgba(255, 215, 0, 0.3)',
          borderRadius: '8px',
          padding: '1.5rem',
          color: '#ffd700'
        }}>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
            <strong>HeroTime is an independent fan-made website.</strong>
          </p>
          <p style={{ lineHeight: '1.8', margin: 0 }}>
            We are not affiliated with, endorsed by, sponsored by, or officially connected to any movie studio, production house, publisher, or entertainment company. All movie titles, character names, and references are used strictly for informational and fan discussion purposes.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#c5e1a5', marginBottom: '1rem' }}>
          Technology & Sustainability
        </h2>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1rem' }}>
          This site is built using modern web technologies including Next.js and Firebase Firestore.
        </p>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1rem' }}>
          To support hosting and maintenance costs, this website may display advertisements through Google AdSense.
        </p>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0' }}>
          We do not sell user data to third parties.
        </p>
      </section>

      <section style={{ 
        textAlign: 'center', 
        padding: '2rem 1rem',
        backgroundColor: 'rgba(20, 30, 20, 0.3)',
        borderRadius: '8px',
        marginTop: '3rem'
      }}>
        <h2 style={{ fontSize: '1.8rem', color: '#c5e1a5', marginBottom: '1rem' }}>
          Join the Experience
        </h2>
        <p style={{ lineHeight: '1.8', color: '#e0e0e0', marginBottom: '1.5rem' }}>
          Be part of the countdown and connect with fans worldwide.
        </p>
        <a 
          href="/#join" 
          className="register-now-button"
        >
          Register Now
        </a>
      </section>
    </div>
  );
}
