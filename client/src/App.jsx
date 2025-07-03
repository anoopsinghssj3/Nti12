import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 


// batch
import Navbar from "./batch/components/Navbar";
import Home from "./batch/components/Home";
import OnlineTraining from "./batch/pages/OnlineTraining";
import Certificate from "./batch/components/Certificate";
import ApplyForCertificate from "./batch/pages/ApplyForCertificate";
import DownloadCertificate from "./batch/pages/DownloadCertificate";
import VerifyCertificate from "./batch/pages/VerifyCertificate";
import Footer from "./batch/home_pages/Footer";
import Placement from "./batch/components/Placement";
import AboutUs from "./batch/others/AboutUs";
import SearchResults from "./batch/home_pages/SearchResults";
import CourseTemplate from "./batch/courseTemplate/CourseTemplate";
import PrivacyPolicy from "./batch/footer/PrivacyPolicy";
import RefundPolicy from "./batch/footer/RefundPolicy";
import TermsAndCondition from "./batch/footer/TermsAndCondition";
import ScrollToTop from "./batch/components/ScrollToTop";
import Payment from "./batch/courseTemplate/Payment";
import CorporateTraining from "./batch/pages/CorporateTraining";

// career
import NavbarC from "./career/components/Navbar";
import LandingPage from "../src/career/LandingPage/LandingPage";

const AppWrapper = () => {
  const location = useLocation();
  const path = location.pathname;

  const isCareerRoute = path.startsWith("/career");
  const isLandingRoute = path === "/landing";

  return (
    <div key={path}> {/* 👈 KEY FOR FORCING RE-RENDER ON ROUTE CHANGE */}
      {!isLandingRoute && (isCareerRoute ? <NavbarC /> : <Navbar />)}

      <Routes>
        {/* batch */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/corpo_tra" element={<CorporateTraining />} />
        <Route path="/on_tra" element={<OnlineTraining />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/apply_certi" element={<ApplyForCertificate />} />
        <Route path="/download_certi" element={<DownloadCertificate />} />
        <Route path="/verify_certi" element={<VerifyCertificate />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/course_template" element={<CourseTemplate />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/refund_policy" element={<RefundPolicy />} />
        <Route path="/terms_conditions" element={<TermsAndCondition />} />
        <Route path="/payment" element={<Payment />} />

        {/* career route */}
        <Route path="/career" element={<LandingPage />} />
      </Routes>

      {!isLandingRoute && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppWrapper />
    </BrowserRouter>
  );
}
