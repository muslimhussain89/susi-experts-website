import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Landing from "./Pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsImmigrationMainPage from "./Pages/UsImmigrationMainPage";
import ProfileEvaluationForm from "./Pages/ProfileEvaluationForm";
import Eb2NiwOutlet from "./Pages/ServicesPages/Eb2NiwOutlet";
import Eb2Niw from "./Pages/ServicesPages/Eb2Niw";
import NiwRequirements from "./Pages/ServicesPages/NiwRequirements";
import LegalFeeNIW from "./Pages/ServicesPages/LegalFeeNIW";
import ProcessingOfNiW from "./Pages/ServicesPages/ProcessingOfNiW";
import BenefitOfNiw from "./Pages/ServicesPages/BenefitOfNiw";
import Eb2NiwFaqs from "./Pages/ServicesPages/Eb2NiwFaqs";
import NiwEntrepreneurs from "./Pages/ServicesPages/NiwEntrepreneurs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/usimmigration" element={<UsImmigrationMainPage />} />
        <Route path="/profile-evaluation" element={<ProfileEvaluationForm />} />

        {/* Nested route setup for EB2-NIW (National Interest Waiver)  */}
        <Route path="/eb2-niv" element={<Eb2NiwOutlet />}>
          <Route index element={<Eb2Niw />} />
          <Route path="niw-requirements" element={<NiwRequirements />} />
          <Route path="legal-fee-niw" element={<LegalFeeNIW />} />
          <Route path="processing-of-niw" element={<ProcessingOfNiW />} />
          <Route path="benefits-of-niw" element={<BenefitOfNiw />} />
          <Route path="niw-faqs" element={<Eb2NiwFaqs />} />
        </Route>
        <Route path="/niw-entrepreneurs" element={<NiwEntrepreneurs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
