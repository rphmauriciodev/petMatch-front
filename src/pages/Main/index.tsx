import { Page } from "components/Page";
import Home from "../Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PetsPage } from "pages/Pets";
import { AboutUsPage } from "pages/AboutUs";
import { HowPage } from "pages/How";

const Main = () => {
  return (
    <BrowserRouter>
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-your-pet" element={<PetsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/how-adopt" element={<HowPage />} />
        </Routes>
      </Page>
    </BrowserRouter>
  );
};

export default Main;
