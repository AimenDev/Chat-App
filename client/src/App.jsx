import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/signup/SignUp";

import { useAuthContext } from "./context/AuthContext";
import NotFound from "./pages/NotFound";

const App = () => {
  const { authUser } = useAuthContext();
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Home | Chat-App</title>
              </Helmet>
              {authUser ? <Home /> : <Navigate to="/login" />}
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Helmet>
                <title>Login | Chat-App</title>
              </Helmet>
              {authUser ? <Navigate to="/" /> : <Login />}
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Helmet>
                <title>Signup | Chat-App</title>
              </Helmet>
              {authUser ? <Navigate to="/" /> : <SignUp />}
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Helmet>
                <title>404 | Chat-App</title>
              </Helmet>
              <NotFound />
            </>
          }
        />
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
