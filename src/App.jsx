import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import InvestorVisa from "./pages/visa/InvestorVisa";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from './pages/userDashboard/Dashboard';
import MyApplication from "./pages/userDashboard/MyApplication";
import LicenseRenewal from "./pages/userDashboard/LicenseRenewal";
import TrackStatus from "./pages/userDashboard/TrackStatus";
import UserDashboard from "./pages/userDashboard/UserDashboard";
import UploadDoc from "./pages/userDashboard/UploadDoc";
function App() {
  return (
    <Router>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/pagenotfound" element={<PageNotFound/>}></Route>
        <Route path="/investor_visa" element={<InvestorVisa/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}>
        <Route index element={<UserDashboard/>}/>
        <Route path="/dashboard/myapplications" element={<MyApplication/>}/>
        <Route path="/dashboard/licenserenewal" element={<LicenseRenewal/>}/>
        <Route path="/dashboard/uploaddoc" element={<UploadDoc/>}/>

        <Route path="/dashboard/track" element={<TrackStatus/>}/>
        </Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
