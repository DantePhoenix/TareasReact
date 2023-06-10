import "./styles/App.css";
import ListaTareas from "./components/ListaTareas.jsx";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
