// import React, { Component } from 'react';
import React from "react";
import "./App.css";
import Reporter from "./Reporter";
import Picture from "./Picture";
// import mörkö from "./mörkö.jpg";

function App() {
  return (
    <div className="App">
      <div className="Top-Container">W23 Reporter and flying words</div>
      <Reporter name="Antero Mertaranta">Löikö mörkö sisään</Reporter>
      <Picture
        src="https://images.almatalent.fi/cx0,cy1,cw1039,ch779,570x/https://assets.almatalent.fi/image/8e79d789-1a60-53ae-a0f8-66045fbdc1df"
        alt="finland, marko, mörkö, ice, hockey"
      />
      <Reporter name="Kevin McGran">
        I know it's rought time now, but did you at least enjoy playing in the
        tournament
      </Reporter>
    </div>
  );
}

export default App;
