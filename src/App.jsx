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


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="corpo_tra" element={<CorporateTraining />} />
        {/* <Route path="on_tra" element={<OnlineTraining />} /> */}
        <Route path="https://guileless-meerkat-55363e.netlify.app/on_tra" element={<OnlineTraining />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/apply_certi" element={<ApplyForCertificate />} />
        <Route path="/download_certi" element={<DownloadCertificate />} />
        <Route path="/verify_certi" element={<VerifyCertificate />} />
      </Routes>
    </BrowserRouter>
  );
}
