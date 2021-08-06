
import './App.css';
import Gallery1 from "./Gallery1";
import Gallery2 from "./Gallery2";
import Gallery3 from "./Gallery3";

function App() {
  return (
    <div>
      <Gallery1 className = "Gallery"> To-Do </Gallery1>
      <Gallery2 className = "Gallery"> In Progress </Gallery2>
      <Gallery3 className = "Gallery"> Done </Gallery3>
    </div>
  );
}

export default App;
