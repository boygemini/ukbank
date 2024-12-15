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

function App() {
  return window.sessionStorage.getItem("loggedin") === "true" ? (
    <div className="body">
      <ErrorBoundary>
        <Banner />
        <Routes>
          <Route path="/" element={<Accounts />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/more" element={<More />} />
          <Route path="*" element={<NotFound />} />{" "}
          <Route path="/login" element={<Login />} />
        </Routes>
        <Menu />
      </ErrorBoundary>
    </div>
  ) : (
    <ErrorBoundary>
      <Banner />
      <Login />
    </ErrorBoundary>
  );
}

export default App;
