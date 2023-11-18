import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { refresh } from "redux/auth/operations";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

import { lazy, useEffect } from "react";
import { Loader } from "./Loader/Loader";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
const Home = lazy(() => import("../pages/Home"));
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const Contacts = lazy(() => import("../pages/Contacts"));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ?
    (<Loader />)
    :
    (
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/register" element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          } />
          <Route path="/login" element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          } />
          <Route path="/contacts" element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          } />

          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Route>
      </Routes>
    );
};