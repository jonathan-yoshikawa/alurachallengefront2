import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cabecalho from "./components/cabecalho/Cabecalho";
import Comunidade from "./components/comunidade/Comunidade";
import Editor from "./components/editor/Editor";
import MenuLateralDireito from "./components/menu-lateral-direito/MenuLateralDireito";
import MenuLateral from "./components/menu-lateral/MenuLateral";

function App() {
  return (
    <div className="App">
      <header>
        <Cabecalho />
      </header>
      <section className="content row mt-3">
        <div className="col-lg-2">
          <MenuLateral />
        </div>
        <div className="col-lg-7 d-flex justify-content-center">
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Editor />} />
              <Route path="editor" element={<Editor />} />
              <Route path="comunidade" element={<Comunidade />} />
            </Routes>
          </div>
        </div>
        <div className="col-lg-3">
          <MenuLateralDireito />
        </div>
      </section>
      <footer className="row">
        <span className="col-12 d-flex justify-content-center">
          Alura Challenges - Jonathan Yoshikawa
        </span>
      </footer>
    </div>
  );
}

export default App;
