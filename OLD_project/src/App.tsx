import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Layout/Navigation';
import { useAuthStore } from './store/authStore';

// Lazy load pages
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Scholarships = React.lazy(() => import('./pages/Scholarships'));
const Benefits = React.lazy(() => import('./pages/Benefits'));
const Chat = React.lazy(() => import('./pages/Chat'));
const Documents = React.lazy(() => import('./pages/Documents'));
const Payments = React.lazy(() => import('./pages/Payments'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Login = React.lazy(() => import('./pages/Login'));

function App() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Login />
      </React.Suspense>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/scholarships" element={<Scholarships />} />
              <Route path="/benefits" element={<Benefits />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Dashboard />} />
            </Routes>
          </React.Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
