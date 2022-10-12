import TodoItem from "./Todo";


function TodoView(props) {
    return (
        <div>
            <ul>
                {props.todoList.map(todo => <TodoItem todo={todo} key={todo.id} deleteTodoHandler={props.deleteTodoHandler}/>)}
            </ul>
        </div>
    )
}

export default TodoView;