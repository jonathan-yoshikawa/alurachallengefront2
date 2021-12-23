import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cabecalho from "./components/cabecalho/Cabecalho";
import Comunidade from "./pages/comunidade/Comunidade";
import Editor from "./pages/editor/Editor";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="App">
      <header>
        <Cabecalho />
      </header>
      <section className="content row mt-3">
        <div className="col-lg-3">
          <Menu />
        </div>
        <div className="col-lg-9 ps-lg-4 pe-lg-4 d-flex justify-content-center">
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Editor />} />
              <Route path="comunidade" element={<Comunidade />} />
            </Routes>
          </div>
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
