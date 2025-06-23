import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Services from "./Routes/Services";
import Projects from "./Routes/Projects";
import ProjectsPageSterling from "./Routes/ProjectsPageSterling";

import { useEffect } from "react";
import ProjectsPagePax1 from "./Routes/ProjectsPagePax1";
import ProjectsPagePax2 from "./Routes/ProjectsPagePax2";
import ProjectsPageOkin from "./Routes/ProjectsPageOkin";
import ProjectsPageOduduwaHomes from "./Routes/ProjectsPageOduduwaHomes";
import ProjectsPageAV14 from "./Routes/ProjectsPageAV14";
import ProjectsPageCradleMall from "./Routes/ProjectsPageCradleMall";
import ProjectsPageG4Osborn from "./Routes/ProjectsPageG4Osborn";
import ProjectsPageCarepoint from "./Routes/ProjectsPageCarepoint";
import ProjectsPageGarnet from "./Routes/ProjectsPageGarnet";
import ProjectsPageSeerbit from "./Routes/ProjectsPageSeerbit";
import ProjectsPageChiefObinna from "./Routes/ProjectsPageChiefObinna";
import ProjectsPageMeridianTowers from "./Routes/ProjectsPageMeridianTowers";
import ProjectsPageTrinityTowers from "./Routes/ProjectsPageTrinityTowers";
import ProjectsPageK21Banana from "./Routes/ProjectsPageK21Banana";
import ProjectsPage4PointOmole from "./Routes/ProjectsPage4PointOmole";
import ProjectsPage4PointOlowoora from "./Routes/ProjectsPage4PointOlowoora";
import ProjectsPage4PointKosofe from "./Routes/ProjectsPage4PointKosofe";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behaviour: "auto" });
  }, [pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/ProjectsPageSterling"
          element={<ProjectsPageSterling />}
        />
        <Route path="/ProjectsPagePax1" element={<ProjectsPagePax1 />} />
        <Route path="/ProjectsPagePax2" element={<ProjectsPagePax2 />} />
        <Route path="/ProjectsPageOkin" element={<ProjectsPageOkin />} />
        <Route
          path="/ProjectsPageOduduwaHomes"
          element={<ProjectsPageOduduwaHomes />}
        />
        <Route path="/ProjectsPageAV14" element={<ProjectsPageAV14 />} />
        <Route
          path="/ProjectsPageCradleMall"
          element={<ProjectsPageCradleMall />}
        />
        <Route
          path="/ProjectsPageG4Osborn"
          element={<ProjectsPageG4Osborn />}
        />
        <Route
          path="/ProjectsPageCarepoint"
          element={<ProjectsPageCarepoint />}
        />
        <Route path="/ProjectsPageGarnet" element={<ProjectsPageGarnet />} />
        <Route path="/ProjectsPageSeerbit" element={<ProjectsPageSeerbit />} />

        <Route
          path="/ProjectsPageChiefObinna"
          element={<ProjectsPageChiefObinna />}
        />

        <Route
          path="/ProjectsPageMeridianTowers"
          element={<ProjectsPageMeridianTowers />}
        />

        <Route
          path="/ProjectsPageTrinityTowers"
          element={<ProjectsPageTrinityTowers />}
        />

        <Route
          path="/ProjectsPageK21Banana"
          element={<ProjectsPageK21Banana />}
        />

        <Route
          path="/ProjectsPage4PointOmole"
          element={<ProjectsPage4PointOmole />}
        />

        <Route
          path="/ProjectsPage4PointOlowoora"
          element={<ProjectsPage4PointOlowoora />}
        />

        <Route
          path="/ProjectsPage4PointKosofe"
          element={<ProjectsPage4PointKosofe />}
        />
      </Routes>
    </div>
  );
}

export default App;
