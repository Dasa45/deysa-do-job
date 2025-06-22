import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      background: '#20232a', 
      padding: '1rem', 
      display: 'flex', 
      gap: '1rem' 
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Início</Link>
      <Link to="/chat" style={{ color: 'white', textDecoration: 'none' }}>Chat</Link>
      <Link to="/sobre" style={{ color: 'white', textDecoration: 'none' }}>Sobre</Link>
    </nav>
  );
}

export default Navbar;