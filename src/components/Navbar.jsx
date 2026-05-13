import { Link, useLocation } from 'react-router-dom';
// Menambahkan impor logo sesuai gambar yang diberikan
import LogoDaurin from '../assets/Logo Daurin.jpeg'; 

const Navbar = () => {
  const location = useLocation();

  // Daftar menu disesuaikan agar sinkron dengan rute di App.js
  const menuItems = [
    { name: 'HOME', path: '/home' }, 
    { name: 'REWARD', path: '/reward' },
    { name: 'CHALLENGE', path: '/challenge' },
    { name: 'IMPACT', path: '/impact' }, // Pastikan App.js memiliki rute /impact
    { name: 'DROP POINT', path: '/drop-point' },
    { name: 'PENJEMPUTAN', path: '/penjemputan' }, // Sudah sesuai dengan rute PenjemputanPage
  ];

  return (
    <nav className="flex items-center justify-between px-10 py-6 border-b border-gray-100 bg-white md:bg-transparent text-left">
      {/* Logo: Menggunakan file Logo Daurin.jpeg dengan gaya melingkar */}
      <Link to="/home" className="flex items-center gap-2">
        <img 
          src={LogoDaurin} 
          alt="Daurin Logo" 
          // Ditambahkan rounded-full agar melingkar dan aspect-square agar simetris
          className="h-10 w-10 object-cover rounded-full shadow-sm" 
        />
        <h1 className="text-2xl font-bold text-tunas-dark flex items-center">
          Daurin
          {/* Titik di ujung tulisan diberi warna oranye */}
          <span className="text-orange-500">.</span>
        </h1>
      </Link>
      
      {/* Menu Tengah */}
      <div className="hidden md:flex gap-6 text-[10px] font-bold text-gray-500 tracking-widest">
        {menuItems.map((item) => (
          <Link 
            key={item.name} 
            to={item.path} 
            className={`transition-all duration-300 pb-1 ${
              // Logika deteksi halaman aktif agar garis bawah muncul di menu yang tepat
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