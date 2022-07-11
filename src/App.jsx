import { useState } from "react";
import SearchBox from "./components/SearchBox";
import "./index.css";

function App() {
  return (
    <>
      <div className="banner"></div>

      <div className="container">
        <div className="div-letras">
          <img
            className="img-letras"
            src="https://logos-marcas.com/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png"
            alt=""
          />
        </div>
        <SearchBox />
      </div>
    </>
  );
}

export default App;
