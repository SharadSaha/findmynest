import Auth from "./containers/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, RequireAuth } from "./containers/layout";
import Home from "./containers/home";
import About from "./containers/about";
import PropertyDetail from "./containers/home/property-detail";
import UserProfile from "./containers/profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}>
            <Route path="/nests/:propertyId" element={<PropertyDetail />} />
          </Route>
          <Route path="/auth" index element={<Auth />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="/" element={<RequireAuth />}>
          <Route path="/profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
