export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Blogged. All rights reserved.</p>
      </div>
    </footer>
  );
}
