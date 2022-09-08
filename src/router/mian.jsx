import React, { Component } from "react";
import { Routes, Route ,Navigate} from "react-router-dom";
import Layout from "~/components/layout";
import Home from "~/pages/home";
import { createMemoryHistory } from "history";
export default class mian extends Component {
  render() {
    return (
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    );
  }
}
