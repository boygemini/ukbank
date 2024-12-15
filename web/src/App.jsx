import { Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import NotFound from "./pages/NotFound";
import Accounts from "./pages/Accounts";
import Transfer from "./pages/Transfer";
import Login from "./pages/Login";
import Cards from "./pages/Cards";
import More from "./pages/More";
import ErrorBoundary from "./components/ErrorBoundary";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (window.location.href.includes("login")) {
      console.log("logged out");
    } else {
      localStorage.getItem("loggedin")
        ? console.log("logged in")
        : (window.location.href = "/login");
    }
  }, []);
  return (
    <div className="body">
      <ErrorBoundary>
        <Banner />
        <Routes>
          <Route path="/" element={<Accounts />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/more" element={<More />} />
          <Route path="*" element={<Login />} />{" "}
          <Route path="/login" element={<Login />} />
        </Routes>
        <Menu />
      </ErrorBoundary>
    </div>
  );
}

export default App;
