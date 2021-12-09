import "./App.css";
import Cabecalho from "./components/cabecalho/cabecalho";

function App() {
  return (
    <div className="App">
      <header>
        <Cabecalho />
      </header>
      <section className="content row mt-3">
        <div className="col-md-2"> Lateral 1 </div>
        <div className="col-md-8 d-flex justify-content-center">
          <div className="main-content"> Main Content </div>
        </div>
        <div className="col-md-2"> Lateral 2 </div>
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
