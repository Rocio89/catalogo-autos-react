// src/components/Sorteo.jsx
function Sorteo({ auto }) {
  if (!auto) return null;

  return (
    <div
      style={{ marginTop: "20px", border: "2px solid green", padding: "10px" }}
    >
      <h2>🎉 Auto Sorteado 🎉</h2>
      <img src={auto.imagen} alt={auto.modelo} style={{ width: "300px" }} />
      <h3>
        {auto.marca} {auto.modelo}
      </h3>
      <p>Año: {auto.año}</p>
      <p>Tipo: {auto.tipo}</p>
      <p>Precio: ${auto.precio}</p>
    </div>
  );
}

export default Sorteo;