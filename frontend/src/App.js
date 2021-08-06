
import './App.css';
import './Board.css'
import ToDoBoard from "./ToDoBoard";
import InProgressBoard from "./InProgressBoard";
import DoneBoard from "./DoneBoard";
import {useState} from "react";
import axios from "axios";

function App() {


    const [toDo, setToDo] = useState({})
    const ToDoHandler = event => setToDo ( {
        description: event.target.value
    })


    function addToDo() {
        axios.post("/api/todo", toDo,)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
    <div className="Layout">
        <header className="header">Kanban 3001</header>
      <ToDoBoard> To-Do </ToDoBoard>
      <InProgressBoard> In Progress </InProgressBoard>
      <DoneBoard> Done </DoneBoard>
        <input type="Text" onChange={ToDoHandler}/>
        <button onClick={addToDo}>add</button>
    </div>
  );
}

export default App;
