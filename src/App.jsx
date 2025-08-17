import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { CustomThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import HealthRecords from './pages/HealthRecords';
import FitnessTracker from './pages/FitnessTracker';
import DietPlanner from './pages/DietPlanner';
import HealthCoaching from './pages/HealthCoaching';
import Community from './pages/Community';
import Reminders from './pages/Reminders';
import Profile from './pages/Profile';

function App() {
  return (
    <AuthProvider>
      <CustomThemeProvider>
        <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Router>
            <ProtectedRoute>
              <Layout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/records" element={<HealthRecords />} />
                  <Route path="/fitness" element={<FitnessTracker />} />
                  <Route path="/diet" element={<DietPlanner />} />
                  <Route path="/coaching" element={<HealthCoaching />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/reminders" element={<Reminders />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </Layout>
            </ProtectedRoute>
          </Router>
        </SnackbarProvider>
      </CustomThemeProvider>
    </AuthProvider>
  );
}

export default App;