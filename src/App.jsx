import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CorporateTraining from './pages/CorporateTraining';
import OnlineTraining from './pages/OnlineTraining';
import Certificate from './components/Certificate';
import ApplyForCertificate from './pages/ApplyForCertificate';
import DownloadCertificate from './pages/DownloadCertificate';
import VerifyCertificate from './pages/VerifyCertificate';
import Footer from './home_pages/Footer';
import Placement from './components/Placement';
import AboutUs from './others/AboutUs';
import SearchResults from './home_pages/SearchResults';
import CourseTemplate from './courseTemplate/CourseTemplate';
import PrivacyPolicy from './footer/PrivacyPolicy';
import RefundPolicy from './footer/RefundPolicy';
import TermsAndCondition from './footer/TermsAndCondition';
import ScrollToTop from './components/ScrollToTop';


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="corpo_tra" element={<CorporateTraining />} />
        <Route path="on_tra" element={<OnlineTraining />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/apply_certi" element={<ApplyForCertificate />} />
        <Route path="/download_certi" element={<DownloadCertificate />} />
        <Route path="/verify_certi" element={<VerifyCertificate />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/course_template" element={<CourseTemplate />} />
        <Route path="privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/refund_policy" element={<RefundPolicy />} />
        <Route path="/terms_conditions" element={<TermsAndCondition />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
