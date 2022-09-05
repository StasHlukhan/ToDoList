import { useEffect, useRef, useState } from 'react'
import {ITodo} from '../../types/data'
import { TodoList } from '../ToDoList/TodoList';
import './App.scss'
const App:React.FC = () =>{
    const [value,setValue] = useState('');
    const [todos,setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange:React.ChangeEventHandler<HTMLInputElement>  = (e) =>{
        setValue(e.target.value)
    }
    const handleKeyDown:React.KeyboardEventHandler<HTMLInputElement> = (e) =>{
        if(e.key === 'Enter')addTodo();
    }
    const addTodo = () =>{
        if(value){
            setTodos([...todos,{
            id: Date.now(),
            title:value,
            complete:false
        }])
        setValue('')
    }
        }
        useEffect(()=>{
            if(inputRef.current)
            inputRef.current?.focus();
        },[])
    
        const removeTodo = (id:number):void=>{
            setTodos(todos.filter(todo => todo.id !== id))
        }
        const toogleTodo = (id:number):void=>{
            setTodos(todos.map(todo => {
                if(todo.id !== id) return todo;

                return{
                    ...todo,
                    complete: !todo.complete
                }
            })
        )}
return(
    <div className='Todo_app'>

        <div className='hero'>
            <div className='hero_info'>
                <h1>What's the Plan for Today?</h1>
            </div>
            
            <div className='place'>
                <input className='place_typing' type="text" value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef}/>
                <button className='Add_button' onClick={addTodo}>Add</button>
            </div>
            <TodoList items={todos} toogleTodo={toogleTodo} removeTodo={removeTodo}></TodoList>
        </div>
    </div>
 
)}
export {App}