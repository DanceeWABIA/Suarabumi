import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatsCard from '../components/StatsCard';
import AchievementCard from '../components/AchievementCard';

const Profile = ({ user, onLogout }) => {
  const navigate = useNavigate();

  // Data default jika user belum login atau data tidak tersedia
  const userData = user || {
    name: "Putra Wijaya",
    email: "putra.wijaya@email.com",
    phone: "+62 812-3456-7890",
    location: "Kelapa Gading, Jakarta Utara",
    memberSince: "Jan 2026",
    contributorRank: "Top 12%",
    verified: true
  };

  const settingsMenu = [
    { name: 'Ubah Password', path: '/settings/password', icon: '🔒' },
    { name: 'Notifikasi', path: '/settings/notifications', icon: '🔔' },
    { name: 'Preferensi', path: '/settings/preferences', icon: '⚙️' },
    { name: 'Bantuan', path: '/settings/help', icon: '❓' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F0] font-sans pb-20">
      <div className="max-w-6xl mx-auto px-6 pt-10">
        
        {/* Header Title & Icons */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-[#1A3022] font-serif">Profile</h1>
          <div className="flex gap-3">
            <button 
              onClick={() => navigate('/settings/notifications')}
              className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm hover:bg-gray-50 transition-all"
            >
              <span className="text-gray-400 text-lg">🔔</span>
            </button>
            <button 
              onClick={() => navigate('/settings')}
              className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm hover:bg-gray-50 transition-all"
            >
              <span className="text-gray-400 text-lg">⚙️</span>
            </button>
          </div>
        </div>

        {/* Profile Identity Card */}
        <div className="bg-white rounded-[40px] p-8 mb-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6 relative">
          <div className="relative">
            <div className="w-24 h-24 bg-[#1A3022] rounded-full flex items-center justify-center text-white text-3xl font-bold">
              {userData.name.charAt(0)}
            </div>
            <button className="absolute bottom-0 right-0 bg-[#2D4A37] border-4 border-white w-8 h-8 rounded-full flex items-center justify-center text-white text-xs">
              📷
            </button>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-[#1A3022] mb-1">{userData.name}</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 text-gray-400 text-sm mb-4">
              <span className="flex items-center gap-1">📧 {userData.email}</span>
              <span className="flex items-center gap-1">📞 {userData.phone}</span>
              <span className="flex items-center gap-1">📍 {userData.location}</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <span className="bg-[#E9F5EF] text-[#2D4A37] px-3 py-1 rounded-full text-[10px] font-bold uppercase">Member sejak {userData.memberSince}</span>
              <span className="bg-[#E9F5EF] text-[#2D4A37] px-3 py-1 rounded-full text-[10px] font-bold uppercase">{userData.contributorRank} Contributor</span>
              <span className="bg-[#E9F5EF] text-[#2D4A37] px-3 py-1 rounded-full text-[10px] font-bold uppercase">Verified</span>
            </div>
          </div>

          <button className="md:absolute top-8 right-8 bg-[#1A3022] text-white px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-[#2d4a37] transition-colors">
            ✏️ Edit Profile
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <StatsCard title="Total Setor" value="145 kg" icon="⚖️" />
          <StatsCard title="Poin Terkumpul" value="2,450" icon="⭐" />
          <StatsCard title="Challenges" value="12" icon="🎯" />
          <StatsCard title="Hari Aktif" value="89" icon="📅" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content: Pencapaian & Aktivitas */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-[40px] p-8 border border-gray-50 shadow-sm">
              <h3 className="font-bold text-xl text-[#1A3022] font-serif mb-6">Pencapaian Terbaru 🏆</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AchievementCard title="Pemula Aktif" desc="Setor pertama kali" date="Jan 2026" icon="🏅" />
                <AchievementCard title="Konsisten" desc="Setor 10x berturut-turut" date="Feb 2026" icon="🏅" />
                <AchievementCard title="Top Contributor" desc="Top 10% bulan ini" date="Mar 2026" icon="🏅" />
                <AchievementCard title="Inspirator" desc="Ajak 5 teman" date="Mar 2026" icon="🏅" />
              </div>
            </section>

            <section className="bg-white rounded-[40px] p-8 border border-gray-50 shadow-sm">
              <h3 className="font-bold text-xl text-[#1A3022] font-serif mb-6">Aktivitas Terakhir</h3>
              <div className="space-y-3">
                {[
                  { label: 'Setor Sampah', detail: '8kg · 28 Mar 2026', point: '+450' },
                  { label: 'Challenge Selesai', detail: 'Bike to Work · 25 Mar 2026', point: '+400' },
                  { label: 'Setor Sampah', detail: '4.5kg · 21 Mar 2026', point: '+380' },
                ].map((act, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-[#F9F9F6] rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#E9F5EF] rounded-full flex items-center justify-center">📦</div>
                      <div>
                        <p className="text-sm font-bold text-[#1A3022]">{act.label}</p>
                        <p className="text-[11px] text-gray-400">{act.detail}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-green-600">{act.point}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar: Pengaturan & Tips */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-[32px] border border-gray-50 shadow-sm">
              <h4 className="font-bold text-base mb-4 text-[#1A3022]">Pengaturan</h4>
              <div className="space-y-1">
                {settingsMenu.map((item) => (
                  <button 
                    key={item.name}
                    onClick={() => navigate(item.path)} 
                    className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                      <span className="text-sm font-medium text-gray-600">{item.name}</span>
                    </div>
                    <span className="text-gray-300">›</span>
                  </button>
                ))}
              </div>
              
              <button 
                onClick={onLogout}
                className="w-full mt-6 flex items-center justify-center gap-2 p-3 bg-[#C85C40] text-white rounded-2xl text-sm font-bold hover:bg-[#b04d35] transition-all"
              >
                <span>🚪</span> Keluar
              </button>
            </div>

            <div className="bg-[#E9F5EF] p-6 rounded-[32px] border border-[#CDE5D9] relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2 text-[#2D4A37] font-bold text-sm">
                <span>💡</span> Tips Profile
              </div>
              <p className="text-[11px] text-[#2D4A37] leading-relaxed opacity-80">
                Lengkapi profil kamu untuk mendapatkan bonus <span className="font-bold">100 poin</span>!
              </p>
            </div>
          </div>

        </div> {/* Tutup grid utama */}
      </div> {/* Tutup max-w-6xl */}
    </div>
  );
};

export default Profile;