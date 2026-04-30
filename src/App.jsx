import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Pastikan path benar
import Home from './pages/Home';
import Profile from './pages/Profile';
import Reward from './pages/Reward';
import Challenge from './pages/Challenge'; // Import halaman baru

function App() {
  return (
    <Router>
      <Navbar /> {/* Taruh Navbar di luar Routes agar muncul di semua halaman */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;