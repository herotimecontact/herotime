export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} HeroTime. All rights reserved.</p>
      </div>
    </footer>
  );
}
