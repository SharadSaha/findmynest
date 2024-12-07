import Auth from "./containers/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./containers/layout";
import Home from "./containers/home";
import About from "./containers/about";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
