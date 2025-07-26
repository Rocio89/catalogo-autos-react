function Filtro({ onBuscar, onFiltrar }) {
  return (
    <div
      style={{
        marginBottom: "20px",
        display: "flex",
        justifyContent: "space-between",
        gap: "40px",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "column", minWidth: "250px" }}
      >
        <label>
          <strong>Búsqueda</strong>
        </label>
        <input
          type="text"
          placeholder="Buscar por marca o modelo"
          onChange={(e) => onBuscar(e.target.value)}
          style={{ padding: "8px", fontSize: "1em" }}
        />
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", minWidth: "250px" }}
      >
        <label>
          <strong>Seleccione filtro deseado</strong>
        </label>
        <select
          onChange={(e) => onFiltrar(e.target.value)}
          defaultValue=""
          style={{ padding: "8px", fontSize: "1em" }}
        >
          <option value="">Todos los tipos</option>
          <option value="SUV">SUV</option>
          <option value="Pickup">Pickup</option>
          <option value="Sedán">Sedán</option>
          <option value="Auto">Auto</option>
        </select>
      </div>
    </div>
  );
}

export default Filtro;
