import React from 'react';

const ImpactPage = () => {
  // Data dummy untuk statistik
  const stats = [
    { label: "Setara Menanam", value: "4 pohon", sub: "CO2 yang diserap", icon: "🌲", color: "bg-[#E9F5EF]" },
    { label: "Air Dihemat", value: "230 Liter", sub: "Dari proses daur ulang", icon: "💧", color: "bg-[#E9F5EF]" },
    { label: "Energi Dihemat", value: "18 kWh", sub: "Listrik yang tidak terpakai", icon: "⚡", color: "bg-[#FFF8E6]" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F0] font-sans pb-10">
      <div className="max-w-6xl mx-auto px-6 pt-12">
        
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#1A3022] font-serif mb-2 flex items-center gap-2">
            Dampak Iklimmu 🌍
          </h1>
          <p className="text-gray-500">Lihat kontribusi nyata kamu terhadap lingkungan.</p>
        </div>

        {/* 1. Highlight Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((item, index) => (
            <div key={index} className="bg-white rounded-[32px] p-8 text-center shadow-sm border border-gray-100">
              <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 text-2xl`}>
                {item.icon}
              </div>
              <div className="text-4xl font-bold text-[#1A3022] mb-1">{item.value}</div>
              <div className="font-bold text-[#1A3022] text-sm mb-1">{item.label}</div>
              <div className="text-xs text-gray-400">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* 2. Trend Kontribusi (Chart Area) */}
        <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100 mb-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#1A3022]">Trend Kontribusi</h2>
              <p className="text-sm text-gray-400">Total sampah terpilah 6 bulan terakhir</p>
            </div>
            <div className="bg-[#E9F5EF] text-[#2D4A37] text-[10px] font-bold px-3 py-1 rounded-full">
              +18% dari bulan lalu
            </div>
          </div>
          
          {/* Placeholder untuk Grafik */}
          <div className="h-64 w-full border-l border-b border-gray-200 relative flex items-end justify-between px-4">
             {/* Simulasi garis grafik sederhana */}
             <div className="absolute inset-0 flex items-center justify-center text-gray-300 opacity-50">
               [ Area Grafik Garis Hijau ]
             </div>
             {['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'].map(month => (
               <span key={month} className="text-[10px] text-gray-400 mb-[-25px] font-bold">{month}</span>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 3. Perbandingan Pengguna */}
          <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#F5F5F0] rounded-lg">👥</div>
              <div>
                <h3 className="font-bold text-[#1A3022]">Perbandingan Pengguna</h3>
                <p className="text-xs text-gray-400">Lihat posisi kamu di komunitas</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-[#FFF4E5] p-4 rounded-2xl flex justify-between items-center border border-[#FFE0B2]">
                <div>
                  <span className="bg-[#E67E22] text-white text-[10px] font-bold px-2 py-0.5 rounded mr-2">1</span>
                  <span className="font-bold text-[#1A3022]">Kamu</span>
                  <p className="text-[10px] text-orange-600 font-bold ml-6">Top 5% pengguna</p>
                </div>
                <div className="font-bold text-[#1A3022]">25 kg</div>
              </div>
              
              <div className="bg-[#F9F9F6] p-4 rounded-2xl flex justify-between items-center">
                <div className="text-xs font-bold text-gray-500 ml-6">Rata-rata Komunitas</div>
                <div className="font-bold text-[#1A3022]">18 kg/bulan</div>
              </div>
            </div>
          </div>

          {/* 4. Bagikan Pencapaian */}
          <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#F5F5F0] rounded-lg">🔗</div>
              <div>
                <h3 className="font-bold text-[#1A3022]">Bagikan Pencapaian</h3>
                <p className="text-xs text-gray-400">Inspirasi teman-temanmu!</p>
              </div>
            </div>

            <div className="bg-[#E9F5EF] p-6 rounded-2xl mb-6 text-center">
              <p className="text-sm italic text-[#2D4A37] mb-4">
                "Aku sudah menyelamatkan lingkungan setara dengan menanam 4 pohon! 🌲✨"
              </p>
              <div className="flex justify-center gap-2">
                <span className="text-[10px] bg-white px-2 py-1 rounded text-gray-500">#TunasAktif</span>
                <span className="text-[10px] bg-white px-2 py-1 rounded text-gray-500">#ClimateHero</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button className="bg-[#1A3022] text-white py-2 rounded-xl text-[10px] font-bold">WhatsApp</button>
              <button className="bg-[#1A3022] text-white py-2 rounded-xl text-[10px] font-bold">Instagram</button>
              <button className="bg-[#1A3022] text-white py-2 rounded-xl text-[10px] font-bold">Twitter</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ImpactPage;