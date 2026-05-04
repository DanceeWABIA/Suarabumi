import React, { useState } from 'react';

// Tambahkan prop onGoToRegister di sini
const LoginPage = ({ onBack, onLoginSuccess, onGoToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const navigateToSection = (sectionId) => {
    onBack(); 
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const validateForm = () => {
    let newErrors = {};
    if (!email) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Format email tidak valid (harus ada @ dan .com)";
    }

    if (!password) {
      newErrors.password = "Password wajib diisi";
    } else if (password.length < 6) {
      newErrors.password = "Password minimal 6 karakter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login sukses:", { email, password });
      if (onLoginSuccess) onLoginSuccess();
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] font-sans">
      
      {/* Navbar Simple */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white/50 backdrop-blur-sm">
        <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
          <div className="w-8 h-8 bg-[#1A3022] rounded-full flex items-center justify-center text-white text-xs">🌱</div>
          <span className="text-xl font-bold text-[#1A3022]">Tunas.</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
          <span onClick={() => navigateToSection('fitur')} className="cursor-pointer hover:text-[#1A3022] transition-colors">Fitur</span>
          <span onClick={() => navigateToSection('cara-kerja')} className="cursor-pointer hover:text-[#1A3022] transition-colors">Cara Kerja</span>
          <span onClick={() => navigateToSection('review')} className="cursor-pointer hover:text-[#1A3022] transition-colors">Review</span>
        </div>
        <div className="flex gap-4">
          <button className="text-sm font-bold text-[#1A3022] px-6 py-2">Masuk</button>
          {/* Tambahkan onClick untuk pindah ke Register */}
          <button 
            onClick={onGoToRegister}
            className="bg-[#1A3022] text-white text-sm font-bold px-8 py-2 rounded-full hover:opacity-90 transition-all"
          >
            Daftar
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 text-sm font-bold mb-10 hover:text-[#1A3022] transition-colors"
        >
          ← Kembali ke Beranda
        </button>

        <div className="flex flex-col lg:flex-row bg-white rounded-[40px] shadow-xl overflow-hidden min-h-[600px]">
          
          {/* SISI KIRI: Branding */}
          <div className="lg:w-1/2 bg-[#1A3022] p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-3xl">🌱</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4 font-serif">Bergabung dengan Tunas</h2>
              <p className="text-white/60 text-sm mb-12">Mulai perjalanan aksi iklimmu bersama ribuan pengguna lain di seluruh Indonesia</p>
              
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                  <span className="text-2xl">🎁</span>
                  <div>
                    <h4 className="text-white text-sm font-bold">Reward Nyata</h4>
                    <p className="text-white/40 text-[10px]">Tukar poin ke GoPay, OVO, Dana</p>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <h4 className="text-white text-sm font-bold">Dampak Terukur</h4>
                    <p className="text-white/40 text-[10px]">Lacak CO2 yang kamu selamatkan</p>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <h4 className="text-white text-sm font-bold">Gratis Selamanya</h4>
                    <p className="text-white/40 text-[10px]">Tanpa biaya tersembunyi</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-green-500/10 rounded-full blur-[80px]"></div>
          </div>

          {/* SISI KANAN: Form Login */}
          <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#1A3022] mb-10 text-center font-serif">Selamat Datang Kembali!</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-[#2D6A4F] uppercase tracking-widest block mb-2">Email</label>
                <div className={`flex items-center gap-3 bg-[#F5F5F0] px-4 py-4 rounded-xl border transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-transparent focus-within:border-[#2D6A4F]'}`}>
                  <span className="text-gray-400 text-lg">✉</span>
                  <input 
                    type="text" 
                    placeholder="nama@email.com"
                    className="bg-transparent w-full outline-none text-sm text-[#1A3022]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-[10px] mt-1 font-bold italic">{errors.email}</p>}
              </div>

              <div>
                <label className="text-[10px] font-bold text-[#2D6A4F] uppercase tracking-widest block mb-2">Password</label>
                <div className={`flex items-center gap-3 bg-[#F5F5F0] px-4 py-4 rounded-xl border transition-all ${errors.password ? 'border-red-500 bg-red-50' : 'border-transparent focus-within:border-[#2D6A4F]'}`}>
                  <span className="text-gray-400 text-lg">🔒</span>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="bg-transparent w-full outline-none text-sm text-[#1A3022]"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {errors.password && <p className="text-red-500 text-[10px] mt-1 font-bold italic">{errors.password}</p>}
              </div>

              <button 
                type="submit"
                className="w-full bg-[#1A3022] text-white py-4 rounded-xl font-bold text-sm shadow-lg hover:opacity-90 transition-all active:scale-[0.98]"
              >
                Masuk
              </button>
            </form>

            <div className="mt-8 text-center space-y-4">
              <button className="text-[10px] font-bold text-[#2D6A4F] uppercase tracking-widest hover:underline">
                Lupa password?
              </button>
              <p className="text-xs text-gray-400">
                Belum punya akun? <span onClick={onGoToRegister} className="text-[#1A3022] font-bold cursor-pointer hover:underline">Daftar Gratis</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;