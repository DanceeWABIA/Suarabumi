import ProfileCard from '../components/ProfileCard';
import StatsCard from '../components/StatsCard';
import AchievementCard from '../components/AchievementCard';

const Profile = ({ onLogout }) => { // 1. Tambahkan onLogout di sini
  return (
    <div className="min-h-screen bg-tunas-bg p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto bg-tunas-light rounded-[40px] shadow-sm overflow-hidden border border-gray-200/50">
        
        <main className="p-6 md:p-10">
          {/* Header Title & Actions */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-tunas-dark">Profile</h1>
            <div className="flex gap-3">
              <button className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm hover:bg-gray-50 transition-all active:scale-95">
                🔔
              </button>
              <button className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm hover:bg-gray-50 transition-all active:scale-95">
                ⚙️
              </button>
            </div>
          </div>

          {/* Profile Identity Card */}
          <div className="mb-8">
            <ProfileCard />
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <StatsCard title="Total Setor" value="145 kg" icon="⚖️" sub="Meningkat 12%" />
            <StatsCard title="Poin" value="2,450" icon="⭐" sub="Top 100 User" />
            <StatsCard title="Challenges" value="12" icon="🎯" sub="Selesai" />
            <StatsCard title="Hari Aktif" value="89" icon="📅" sub="Streak 🔥" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Achievement Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-xl text-tunas-dark flex items-center gap-2">
                  Pencapaian Terbaru <span className="text-lg">🏆</span>
                </h3>
                <button className="text-xs font-bold text-tunas-green hover:underline">Lihat Semua</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AchievementCard title="Pemula Aktif" desc="Setor pertama kali" date="Jan 2026" icon="🏅" />
                <AchievementCard title="Konsisten" desc="Setor 10x berturut-turut" date="Feb 2026" icon="🏅" />
                <AchievementCard title="Top Contributor" desc="Top 10% bulan ini" date="Mar 2026" icon="🏅" />
                <AchievementCard title="Inspirator" desc="Ajak 5 teman" date="Mar 2026" icon="🏅" />
              </div>
            </div>

            {/* Sidebar Settings & Tips */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                <h4 className="font-bold text-base mb-6 text-tunas-dark">Pengaturan Akun</h4>
                <div className="space-y-3">
                  {['Ubah Profil', 'Keamanan & Password', 'Notifikasi', 'Metode Pembayaran'].map(item => (
                    <button 
                      key={item} 
                      className="w-full text-left p-4 bg-gray-50 rounded-2xl text-[13px] font-bold text-gray-600 hover:bg-tunas-green hover:text-white transition-all flex justify-between items-center group"
                    >
                      {item} 
                      <span className="opacity-40 group-hover:opacity-100 transition-all text-lg">›</span>
                    </button>
                  ))}
                  
                  {/* 2. Hubungkan onLogout ke button ini */}
                  <button 
                    onClick={onLogout}
                    className="w-full p-4 bg-red-50 text-red-600 rounded-2xl text-[13px] font-bold mt-6 hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    🚪 Keluar Sesi
                  </button>
                </div>
              </div>

              {/* Bonus Tips Card */}
              <div className="bg-green-500/10 p-6 rounded-[32px] border border-tunas-green/20 relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 text-6xl opacity-10">🌱</div>
                <p className="text-[12px] font-bold text-tunas-green mb-2 flex items-center gap-2">
                  💡 Tips Profile
                </p>
                <p className="text-[11px] text-tunas-dark leading-relaxed font-medium">
                  Lengkapi data diri dan verifikasi nomor HP kamu untuk mendapatkan bonus <span className="font-bold text-tunas-green">100 poin</span> secara cuma-cuma!
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;