import { useState } from "react";
import { autos as autosData } from "./data/autos";
import AutoCard from "./components/AutoCard";
import Filtro from "./components/Filtro";


function App() {
  const [autos, setAutos] = useState(autosData);
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("");

    const autosFiltrados = autosData
      .filter(
        (auto) =>
          auto.marca.toLowerCase().includes(busqueda.toLowerCase()) ||
          auto.modelo.toLowerCase().includes(busqueda.toLowerCase())
      )
      .filter((auto) => (filtro ? auto.tipo === filtro : true));
  

  return (
    <div>
      <h1>Catálogo de Autos</h1>
      <Filtro onBuscar={setBusqueda} onFiltrar={setFiltro} />
      
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {autosFiltrados.map(auto => (
            <AutoCard key={auto.id} auto={auto} />
        ))}
      </div>
    </div>
  );
}

export default App;
