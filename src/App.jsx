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
import Eb1A from "./Pages/ServicesPages/Eb1A";
import Eb1B from "./Pages/ServicesPages/Eb1B";
import Eb1AOutlet from "./Pages/ServicesPages/Eb1AOutlet";
import Eb1BOutlet from "./Pages/ServicesPages/Eb1BOutlet";
import LegalFeeEb1A from "./Pages/ServicesPages/LegalFeeEb1A";
import LegalFeeEb1B from "./Pages/ServicesPages/LegalFeeEb1B";
import ProcessingOfEb1A from "./Pages/ServicesPages/ProcessingOfEb1A";
import ProcessingOfEb1B from "./Pages/ServicesPages/ProcessingOfEb1B";
import Eb1AFaqs from "./Pages/ServicesPages/Eb1AFaqs";
import Eb1BFaqs from "./Pages/ServicesPages/Eb1BFaqs";
import LaborCertificationOutlet from "./Pages/ServicesPages/LaborCertificationOutlet";
import LaborCertificationServiceTabs from "./Components/LaborCertificationServiceTabs";
import LaborCertification from "./Pages/ServicesPages/LaborCertification";

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

        {/* Nested route setup for EB1-A (Extraordinary Ability)  */}
        <Route path="/eb1-a" element={<Eb1AOutlet />}>
          <Route index element={<Eb1A />} />
          <Route path="eb1-a-legal-fee" element={<LegalFeeEb1A />} />
          <Route path="processing-of-eb1-a" element={<ProcessingOfEb1A />} />
          <Route path="eb1-a-faqs" element={<Eb1AFaqs />} />
        </Route>

        {/* Nested route setup for EB1-B  */}
        <Route path="/eb1-b" element={<Eb1BOutlet />}>
          <Route index element={<Eb1B />} />
          <Route path="eb1-b-legal-fee" element={<LegalFeeEb1B />} />
          <Route path="processing-of-eb1-b" element={<ProcessingOfEb1B />} />
          <Route path="eb1-b-faqs" element={<Eb1BFaqs />} />
        </Route>

        {/* Nested route setup for EB1-B  */}
        <Route path="/perm-labor-certification" element={<LaborCertificationOutlet />}>
          <Route index element={<LaborCertification />} />
          <Route path="eb1-b-legal-fee" element={<LegalFeeEb1B />} />
        </Route>




      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
