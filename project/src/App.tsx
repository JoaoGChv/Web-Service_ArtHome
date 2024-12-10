import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import PartnerLoginForm from './components/auth/PartnerLoginForm';
import PlansPage from './pages/PlansPage';
import PaymentPage from './pages/PaymentPage';
import Dashboard from './pages/Dashboard';
import PartnerProfile from './pages/PartnerProfile';
import SettingsLayout from './pages/settings/SettingsLayout';
import Subscription from './pages/settings/Subscription';
import Support from './pages/settings/Support';
import Terms from './pages/settings/Terms';
import ResetPassword from './pages/ResetPassword';
import { useAuthStore } from './store/authStore';

const Home = () => (
  <>
    <Hero />
    <Features />
    <Contact />
  </>
);

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAuthStore((state) => state.user);
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm type="user" />} />
            <Route path="/register" element={<RegisterForm type="user" />} />
            <Route path="/partner/login" element={<PartnerLoginForm />} />
            <Route path="/partner/register" element={<RegisterForm type="partner" />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route
              path="/plans"
              element={
                <ProtectedRoute>
                  <PlansPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/payment/:plan"
              element={
                <ProtectedRoute>
                  <PaymentPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <PartnerProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <SettingsLayout />
                </ProtectedRoute>
              }
            >
              <Route path="subscription" element={<Subscription />} />
              <Route path="support" element={<Support />} />
              <Route path="terms" element={<Terms />} />
              <Route index element={<Navigate to="subscription" replace />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;