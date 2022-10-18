import React, { Component, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Layout from "~/components/layout";
import Home from "~/pages/home";
import About from "~/pages/about";
const Redirect = ({ to }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to, { replace: true });
  });
  return null;
};
export default class mian extends Component {
  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<Redirect to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    );
  }
}
