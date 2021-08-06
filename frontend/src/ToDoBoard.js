import "./Board.css"
ç

export default function ToDoBoard(props) {
    return <section className="Board">
            <h6>ToDo</h6>
            {props.toDos.map(element => <p>{element.description}</p>)}
        </section>

}