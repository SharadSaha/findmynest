import Auth from "./containers/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./containers/layout";
import Home from "./containers/home";
import About from "./containers/about";
import PropertyDetail from "./containers/home/property-detail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/nests" element={<Home />}>
            <Route path="/nests/:propertyId" element={<PropertyDetail />} />
          </Route>
          <Route path="/auth" index element={<Auth />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
