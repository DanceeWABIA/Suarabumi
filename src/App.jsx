import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authView, setAuthView] = useState('landing'); 
  const [userPhone, setUserPhone] = useState(""); 

  // Fungsi Logout Central
  const handleLogout = () => {
    setIsLoggedIn(false);
    setAuthView('landing');
  };

  return (
    <Router>
      <div className="bg-[#F5F5F0] min-h-screen">
        {isLoggedIn && <Navbar />}
        
        <Routes>
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
                        setAuthView('landing'); 
                      }} 
                    />
                  )}
                </>
              ) : (
                <Navigate to="/home" />
              )
            } 
          />

          {/* Protected Routes */}
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
          <Route path="/reward" element={isLoggedIn ? <Reward /> : <Navigate to="/" />} />
          <Route path="/challenge" element={isLoggedIn ? <Challenge /> : <Navigate to="/" />} />
          
          {/* Update Route Profile untuk menerima handleLogout */}
          <Route 
            path="/profile" 
            element={isLoggedIn ? <Profile onLogout={handleLogout} /> : <Navigate to="/" />} 
          />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;