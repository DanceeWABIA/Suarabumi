import StatsCard from '../components/StatsCard';

const Home = () => {
  return (
    <div className="min-h-screen bg-tunas-bg p-4 md:p-8">
      {/* Wrapper Utama dikurangi p-10 agar tidak terlalu jauh dari Navbar yang ada di atasnya */}
      <div className="max-w-6xl mx-auto bg-tunas-light rounded-[40px] shadow-sm overflow-hidden border border-gray-200/50">
        
        {/* Navbar SUDAH DIHAPUS dari sini karena sudah ada di App.jsx */}

        <main className="p-6 md:p-10">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-tunas-dark mb-2">Selamat Datang, Budi! 👋</h1>
            <p className="text-gray-500 text-sm">Terus semangat jaga lingkungan. Kamu sudah berkontribusi banyak!</p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <StatsCard title="Total Poin" value="12,450" icon="🏆" sub="78% menuju level Diamond" progress={78} />
            <StatsCard title="CO₂ Diselamatkan" value="127.5 kg" icon="🌍" sub="+15.2 kg minggu ini 🎉" trend />
            <StatsCard title="Total Setor" value="42 kali" icon="📦" sub="Sejak Januari 2026" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chart Section */}
            <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
              <h3 className="font-bold text-tunas-dark mb-8">Aktivitas Setor — 7 Hari Terakhir</h3>
              <div className="flex items-end justify-between h-40 px-4">
                {[40, 55, 30, 80, 50, 65, 35].map((h, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className="w-10 bg-tunas-green rounded-t-lg" style={{ height: `${h}%` }}></div>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">
                      {['Sen','Sel','Rab','Kam','Jum','Sab','Min'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions Section */}
            <div className="bg-tunas-dark p-8 rounded-[32px] text-white">
              <h3 className="font-bold mb-6">Aksi Cepat</h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-2xl flex items-center gap-4 cursor-pointer hover:bg-white/20 border border-white/5">
                   <span className="text-xl">📍</span>
                   <div className="text-left">
                     <p className="text-sm font-bold leading-none">Cari Drop Point</p>
                     <p className="text-[10px] opacity-60">Terdekat dari lokasimu</p>
                   </div>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl flex items-center gap-4 cursor-pointer hover:bg-white/20 border border-white/5">
                   <span className="text-xl">📅</span>
                   <div className="text-left">
                     <p className="text-sm font-bold leading-none">Jadwalkan Penjemputan</p>
                     <p className="text-[10px] opacity-60">Gratis langsung ke rumah</p>
                   </div>
                </div>
                <div className="bg-tunas-orange p-4 rounded-2xl flex items-center gap-4 cursor-pointer text-tunas-dark transition-transform hover:scale-[1.02]">
                   <span className="text-xl">💰</span>
                   <div className="text-left">
                     <p className="text-sm font-bold leading-none">Tukar Poin</p>
                     <p className="text-[10px] font-bold opacity-80">Ke GoPay, OVO, Dana</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;