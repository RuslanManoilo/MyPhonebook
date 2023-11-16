import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

import { lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const Contacts = lazy(() => import("../pages/Contacts"));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />

        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Route>
    </Routes>
  );
};