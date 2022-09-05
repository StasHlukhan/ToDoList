import { ITodo } from "../../types/data"
import { TodoItem } from "../ToDoItem/TodoItem"

interface ITodoListProps{
    items:ITodo[];
    toogleTodo: (id:number)=>void;
    removeTodo: (id:number)=>void;
}


const TodoList: React.FC<ITodoListProps> = (props)=>{
    const {items,toogleTodo,removeTodo} = props;
    return(
        <div>
            {
                props.items.map(todo =>
                     <TodoItem
                     key={todo.id}{...todo} 
                     removeTodo={removeTodo} 
                     toogleTodo={toogleTodo}  ></TodoItem>)
            }
        </div>
    )
}
export {TodoList}