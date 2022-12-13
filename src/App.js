import "./index.css";
import Patients from "./pages/Patients.jsx";
import Dashboard from "./pages/Dashboard";
import UserLayout from "./components/layout/UserLayout";
import ClinicLayout from "./components/layout/ClinicLayout";
import AdminLayout from "./components/layout/AdminLayout"
import Login from "./pages/Login";
import LoginType from "./pages/clinicpages/LoginType";
import {Routes, Route} from "react-router-dom";
import Doctor from "./pages/clinicpages/Doctor"
import Patient from "./pages/clinicpages/Patient"
import Settings from "./pages/clinicpages/Settings"
import AdminDashboard from "./pages/adminpages/AdminDashboard"
import Memberships from "./pages/adminpages/Memberships"
import Setting from "./pages/adminpages/Setting"
import Audit from "./pages/adminpages/Audit"
import Clinics from "./pages/adminpages/Clinics"

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/patients" element={<Patients />}/>
      </Route>

      <Route element={<ClinicLayout />}>
        <Route path="/doctor" element={<Doctor />}/>
        <Route path="/patient" element={<Patient />}/>
        <Route path="/settings" element={<Settings/>}/>
      </Route>
      <Route path="/clinic/login" element={<LoginType />}/>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />}/>
        <Route path="clinics" element={<Clinics />}/>
        <Route path="memberships" element={<Memberships/>}/>
        <Route path="audit" element={<Audit/>}/>
        <Route path="setting" element={<Setting/>}/>
      </Route>
      <Route path="/admin/login" element={<LoginType />}/>
    </Routes>
    </>
  );
}

export default App;
