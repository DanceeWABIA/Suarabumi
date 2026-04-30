import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Daftar menu sesuai path yang ada di App.jsx
  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'REWARD', path: '/reward' },
    { name: 'CHALLENGE', path: '/challenge' },
    { name: 'IMPACT', path: '/impact' },
    { name: 'DROP POINT', path: '/drop-point' },
    { name: 'PENJEMPUTAN', path: '/pickup' },
  ];

  return (
    <nav className="flex items-center justify-between px-10 py-6 border-b border-gray-100 bg-white md:bg-transparent">
      {/* Logo: Klik untuk balik ke Home */}
      <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-tunas-dark">
        🌱 Tunas.
      </Link>
      
      {/* Menu Tengah */}
      <div className="hidden md:flex gap-6 text-[10px] font-bold text-gray-500 tracking-widest">
        {menuItems.map((item) => (
          <Link 
            key={item.name} 
            to={item.path} 
            className={`transition-all duration-300 pb-1 ${
              location.pathname === item.path 
              ? 'text-tunas-dark border-b-2 border-tunas-dark' 
              : 'hover:text-tunas-dark'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      
      {/* Tombol Profile: Klik untuk ke Profile */}
      <Link 
        to="/profile" 
        className={`px-6 py-2 rounded-full text-xs font-bold transition-all shadow-lg ${
          location.pathname === '/profile'
          ? 'bg-tunas-green text-white shadow-tunas-green/20'
          : 'bg-tunas-dark text-white hover:opacity-90 shadow-tunas-dark/20'
        }`}
      >
        Profile
      </Link>
    </nav>
  );
};

export default Navbar;