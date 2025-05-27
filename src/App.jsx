import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import "./assets/tailwind.css";
import Loading from "./components/Loading";

const NotFound = React.lazy(() => import("./pages/NotFound"));
const ErrorPage403 = React.lazy(() => import("./pages/ErrorPage403"));
const ErrorPage401 = React.lazy(() => import("./pages/ErrorPage401"));
const ErrorPage400 = React.lazy(() => import("./pages/ErrorPage400"));
const UserList = React.lazy(() => import("./pages/UserList"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Produk = React.lazy(() => import("./pages/Produk"));
const Artikel = React.lazy(() => import("./pages/Artikel"));
const Faq = React.lazy(() => import("./pages/Faq"));
const Karyawan = React.lazy(() => import("./pages/Karyawan"));
const LowonganKerja = React.lazy(() => import("./pages/LowonganKerja"));
const Testimoni = React.lazy(() => import("./pages/Testimoni"));
const Booking = React.lazy(() => import("./pages/Booking"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/karyawan" element={<Karyawan />} />
          <Route path="/lowongan-kerja" element={<LowonganKerja />} />
          <Route path="/testimoni" element={<Testimoni />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/UserList" element={<UserList />} />
        </Route>
        {/* Error Pages */}
        <Route path="/ErrorPage400" element={<ErrorPage400 />} />
        <Route path="/ErrorPage401" element={<ErrorPage401 />} />
        <Route path="/ErrorPage403" element={<ErrorPage403 />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
