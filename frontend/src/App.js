import './App.css';
import './components/Board.css'
import ToDoBoard from "./components/ToDoBoard";
import InProgressBoard from "./components/InProgressBoard";
import DoneBoard from "./components/DoneBoard";
import {useState} from "react";
import axios from "axios";

function App() {


    const [description, setDescription] = useState({})
    const [toDos, setToDos] = useState([])

    const ToDoHandler = event => setDescription({
        description: event.target.value
    })


    function addToDo() {
        axios.post("/api/todo", "description")
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

    function changeStatus(toDo) {
      axios.put(`/api/todo/${toDo.id}`, toDo)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const open = toDos.filter(toDo => toDo.status === "OPEN")
    const inProgress = toDos.filter(toDo => toDo.status === "IN_PROGRESS")
    const done = toDos.filter(toDo => toDo.status === "DONE")

    return (
        <div className="Layout">
            <header className="header">Kanban 3001</header>
            <ToDoBoard toDos = {open} changeStatus={changeStatus}> To-Do </ToDoBoard>
            <InProgressBoard toDos = {inProgress} changeStatus={changeStatus}> In Progress </InProgressBoard>
            <DoneBoard toDos = {done} changeStatus={changeStatus}> Done</DoneBoard>
            <input type="Text" onChange={ToDoHandler}/>
            <button onClick={addToDo}>add</button>
            <button onClick={getAllTodos}>load</button>
        </div>
    );
}

export default App;
