import { useState } from "react";
import { autos as autosData } from "./data/autos";
import AutoCard from "./components/AutoCard";
import Filtro from "./components/Filtro";
import Sorteo from "./components/Sorteo";

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
    <div>
      <h1>Catálogo de Autos</h1>

      <Filtro onBuscar={setBusqueda} onFiltrar={setFiltro} />
      <button onClick={sortearAuto}>🎲 Sortear Auto</button>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {autosFiltrados.map((auto) => (
          <AutoCard key={auto.id} auto={auto} />
        ))}
      </div>

      <Sorteo auto={autoSorteado} />
    </div>
  );
}

export default App;
