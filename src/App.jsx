import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import CoinData from "./pages/CoinData";
import About from "./pages/About";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CoinData />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
