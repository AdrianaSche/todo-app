import "./Board.css"
import ToDoCard from "./ToDoCard";

export default function DoneBoard(props) {
    return <section className="Board">
        <h6>Done Board</h6>
        {props.toDos.map(toDo =>
            <ToDoCard toDo={toDo} key={toDo.id} changeStatus={props.changeStatus}/>)}
    </section>
}