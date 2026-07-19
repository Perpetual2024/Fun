import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Teachers from './pages/Teachers';
import GradebookPage from './pages/Gradebook'
import ParentDashboardPage from './pages/Parents';
import TermsPage from './pages/legal/TermsPage';
import PrivacyPolicyPage from './pages/legal/PrivacyPolicy';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/teacher" element={<Teachers />} />
      <Route path="/parents" element={<ParentDashboardPage />} />
      <Route path="/gradebook" element={<GradebookPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
    </Routes>
  );
}