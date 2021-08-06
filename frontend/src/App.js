import './App.css';
import './Board.css'
import ToDoBoard from "./ToDoBoard";
import InProgressBoard from "./InProgressBoard";
import DoneBoard from "./DoneBoard";
import {useState} from "react";
import axios from "axios";

function App() {


    const [description, setDescription] = useState({})
    const [toDos, setToDos] = useState([])

    const ToDoHandler = event => setDescription({
        description: event.target.value
    })


    function addToDo() {
        axios.post("/api/todo", description,)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    function getAllTodos() {

        axios.get("/api/todo")
            .then(function (response) {
                console.log(response);
                setToDos(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="Layout">
            <header className="header">Kanban 3001</header>
            <ToDoBoard toDos = {toDos}> To-Do </ToDoBoard>
            <InProgressBoard> In Progress </InProgressBoard>
            <DoneBoard> Done </DoneBoard>
            <input type="Text" onChange={ToDoHandler}/>
            <button onClick={addToDo}>add</button>
            <button onClick={getAllTodos}>load</button>
        </div>
    );
}

export default App;
