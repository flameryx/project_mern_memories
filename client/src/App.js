import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="10258850926-m0op8ikio8n1fq24fhuv4fmpdb6g34km.apps.googleusercontent.com">
      <BrowserRouter>
        <Container maxWidth="lg">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/auth" exact element={<Auth />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
