import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Works from "./components/pages/Works";
import Skills from "./components/pages/Skills";

function Layout() {
  return (
    <>
      {/* I want to have my sidebar be on the onboarding page's left side and I want my pages to be on the RHS */}
      <Routes>
          <Route index element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default Layout;
