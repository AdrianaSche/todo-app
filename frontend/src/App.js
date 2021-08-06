
import './App.css';
import './Gallery.css'
import Gallery1 from "./Gallery1";
import Gallery2 from "./Gallery2";
import Gallery3 from "./Gallery3";

function App() {
  return (
    <div className="Layout">
        <header className="header">Kanban 3001</header>
      <Gallery1> To-Do </Gallery1>
      <Gallery2 className = "Gallery2"> In Progress </Gallery2>
      <Gallery3 className = "Gallery3"> Done </Gallery3>
    </div>
  );
}

export default App;
