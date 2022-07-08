import React, { Fragment } from "react";

import Header from "./components/header/Header";
import CoinData from "./components/crypto/CoinData";

function App() {
  return (
    <Fragment>
      <Header />
      <CoinData />
    </Fragment>
  );
}

export default App;
