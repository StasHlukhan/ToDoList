import { once } from "events";
import { ITodo } from "../../types/data"
import './TodoItem.scss'

interface ITodoItem extends ITodo{
    toogleTodo: (id:number)=>void;
    removeTodo: (id:number)=>void;
}


const TodoItem: React.FC<ITodoItem> = (props)=>{
    const {id,title,complete,removeTodo,toogleTodo} = props;
    return(
        <div>
            <div className="affairs">
                <div className="affairs_info">
                    <input className="checkmark" type="checkbox" checked={complete} onChange={()=> toogleTodo(id)} />
                    <span className="title">{title}</span> 
                </div>
                <div className="remove">
                    <button  onClick={()=> removeTodo(id)} >X</button>
                </div>
            </div>
        </div>
    )
}
export {TodoItem}