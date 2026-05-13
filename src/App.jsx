import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Import Komponen & Pages
import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import Profile from './pages/Profile';
import Reward from './pages/Reward';
import Challenge from './pages/Challenge';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OTPPage from './pages/OTPPage'; 
import SuccessVerification from './pages/SuccessVerification';
import SettingsPage from './pages/SettingsPage'; 
import ForgotPassword from './pages/UbahPassword'; 
import NotificationPage from './pages/Notification';
import PreferencePage from './pages/PreferencePage'; 
import HelpPage from './pages/HelpPage'; 
import PenjemputanPage from './pages/PenjemputanPage'; 
// --- TAMBAHKAN IMPORT BARU ---
import ImpactPage from './pages/ImpactPage'; 
import DropPointPage from './pages/DropPointPage'; 

// --- KOMPONEN PEMBANTU NAVIGASI ---

const SettingsWithNavigation = ({ handleLogout }) => {
  const navigate = useNavigate();
  return (
    <SettingsPage 
      onLogout={handleLogout}
      onChangePassword={() => navigate('/settings/password')}
      onGoToNotification={() => navigate('/settings/notifications')} 
      onGoToPreference={() => navigate('/settings/preferences')}
      onGoToHelp={() => navigate('/settings/help')}
      onBack={() => navigate('/profile')}
    />
  );
};

const ChangePasswordWithNavigation = () => {
  const navigate = useNavigate();
  return <ForgotPassword onBack={() => navigate('/profile')} />;
};

const NotificationWithNavigation = () => {
  const navigate = useNavigate();
  return <NotificationPage onBack={() => navigate('/profile')} />;
};

const PreferenceWithNavigation = () => {
  const navigate = useNavigate();
  return <PreferencePage onBack={() => navigate('/profile')} />;
};

const HelpWithNavigation = () => {
  const navigate = useNavigate();
  return <HelpPage onBack={() => navigate('/profile')} />;
};

// --- KOMPONEN UTAMA APP ---

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authView, setAuthView] = useState('landing'); 
  const [userPhone, setUserPhone] = useState(""); 

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAuthView('landing');
  };

  return (
    <Router>
      <div className="bg-[#F5F5F0] min-h-screen">
        {/* Navbar hanya muncul jika sudah login */}
        {isLoggedIn && <Navbar />}
        
        <Routes>
          {/* 1. ROUTE AUTHENTICATION & LANDING */}
          <Route 
            path="/" 
            element={
              !isLoggedIn ? (
                <>
                  {authView === 'landing' && (
                    <LandingPage 
                      onLogin={() => setAuthView('login')} 
                      onGoToRegister={() => setAuthView('register')} 
                    />
                  )}

                  {authView === 'login' && (
                    <LoginPage 
                      onBack={() => setAuthView('landing')} 
                      onLoginSuccess={() => setIsLoggedIn(true)}
                      onGoToRegister={() => setAuthView('register')} 
                      onForgotPassword={() => setAuthView('forgot-password')}
                    />
                  )}

                  {authView === 'register' && (
                    <RegisterPage 
                      onBack={() => setAuthView('landing')} 
                      onGoToLogin={() => setAuthView('login')} 
                      onContinue={(phone) => {
                        setUserPhone(phone);
                        setAuthView('otp');
                      }}
                    />
                  )}

                  {authView === 'otp' && (
                    <OTPPage 
                      phoneNumber={userPhone || "+62 812-3456-789"}
                      onBack={() => setAuthView('register')} 
                      onVerifySuccess={() => setAuthView('success')} 
                    />
                  )}

                  {authView === 'success' && (
                    <SuccessVerification 
                      onComplete={() => {
                        setIsLoggedIn(true);
                        // Langsung arahkan ke home setelah sukses
                      }} 
                    />
                  )}

                  {authView === 'forgot-password' && (
                    <ForgotPassword onBack={() => setAuthView('login')} />
                  )}
                </>
              ) : (
                <Navigate to="/home" replace />
              )
            } 
          />

          {/* 2. ROUTE UTAMA (PROTECTED) */}
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
          <Route path="/reward" element={isLoggedIn ? <Reward /> : <Navigate to="/" />} />
          <Route path="/challenge" element={isLoggedIn ? <Challenge /> : <Navigate to="/" />} />
          
          {/* Tambahan Rute Baru sesuai Navbar */}
          <Route path="/impact" element={isLoggedIn ? <ImpactPage /> : <Navigate to="/" />} />
          <Route path="/drop-point" element={isLoggedIn ? <DropPointPage /> : <Navigate to="/" />} />
          <Route path="/penjemputan" element={isLoggedIn ? <PenjemputanPage /> : <Navigate to="/" />} />
          
          <Route 
            path="/profile" 
            element={isLoggedIn ? <Profile onLogout={handleLogout} /> : <Navigate to="/" />} 
          />

          {/* 3. ROUTE PENGATURAN (SETTINGS) */}
          <Route 
            path="/settings" 
            element={isLoggedIn ? <SettingsWithNavigation handleLogout={handleLogout} /> : <Navigate to="/" />} 
          />

          <Route 
            path="/settings/password" 
            element={isLoggedIn ? <ChangePasswordWithNavigation /> : <Navigate to="/" />} 
          />

          <Route 
            path="/settings/notifications" 
            element={isLoggedIn ? <NotificationWithNavigation /> : <Navigate to="/" />} 
          />

          <Route 
            path="/settings/preferences" 
            element={isLoggedIn ? <PreferenceWithNavigation /> : <Navigate to="/" />} 
          />

          <Route 
            path="/settings/help" 
            element={isLoggedIn ? <HelpWithNavigation /> : <Navigate to="/" />} 
          />

          {/* 4. REDIRECTS & FALLBACK */}
          <Route path="/change-password" element={<Navigate to="/settings/password" />} />
          <Route path="/notifications" element={<Navigate to="/settings/notifications" />} />
          <Route path="/preferences" element={<Navigate to="/settings/preferences" />} />
          <Route path="/help" element={<Navigate to="/settings/help" />} />
          
          {/* Jika rute tidak ditemukan, kembali ke "/" */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;