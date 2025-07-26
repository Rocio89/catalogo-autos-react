// src/App.jsx
import { useState } from "react";
import { autos as autosData } from "./data/autos";
import AutoCard from "./components/AutoCard";
import Filtro from "./components/Filtro";
import Sorteo from "./components/Sorteo";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [autos, setAutos] = useState(autosData);
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("");
  const [autoSorteado, setAutoSorteado] = useState(null);

  const autosFiltrados = autosData
    .filter(
      (auto) =>
        auto.marca.toLowerCase().includes(busqueda.toLowerCase()) ||
        auto.modelo.toLowerCase().includes(busqueda.toLowerCase())
    )
    .filter((auto) => (filtro ? auto.tipo === filtro : true));

  const sortearAuto = () => {
    const aleatorio =
      autosFiltrados[Math.floor(Math.random() * autosFiltrados.length)];
    setAutoSorteado(aleatorio);
  };

  return (
    <div className="app-container">
      {/* Barra superior */}
      <header className="top-bar">
        <h1 className="logo">Auto Dealer</h1>
        <div className="top-bar-controls">
          <Filtro onBuscar={setBusqueda} onFiltrar={setFiltro} />
          <button className="sortear-btn" onClick={sortearAuto}>
            🎲 Sortear Auto
          </button>
        </div>
      </header>

      {/* Auto sorteado en la parte superior */}
      <div className="sorteo-destacado">
        <Sorteo auto={autoSorteado} />
      </div>

      {/* Catálogo visual */}
      <div className="catalogo">
        {autosFiltrados.map((auto) => (
          <AutoCard key={auto.id} auto={auto} />
        ))}
      </div>
      <div className="app-container">
        {/* tu encabezado y catálogo */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
