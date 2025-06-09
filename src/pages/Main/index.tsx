import { Page } from "components/Page";
import Home from "../Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PetsPage } from "pages/Pets";
import { AboutUsPage } from "pages/AboutUs";
import { HowPage } from "pages/How";
import { AdoptNowPage } from "pages/AdoptNow";
import { PostAdoptPage } from "pages/postAdopt";

const Main = () => {
  return (
    <BrowserRouter>
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-your-pet" element={<PetsPage />} />
          <Route path="/adopt-now" element={<AdoptNowPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/how-adopt" element={<HowPage />} />
          <Route path="/post-adoption" element={<PostAdoptPage />} />
        </Routes>
      </Page>
    </BrowserRouter>
  );
};

export default Main;
