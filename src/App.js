import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Single from "./pages/single";
import WritePage from "./pages/write";
import Error from "./pages/error";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/login" || location.pathname === "/reg";

  return (
    <div>
      {!hideNavAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/single" element={<Single />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

export default App;
