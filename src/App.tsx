import {FC, useState} from 'react';
import './styles/App.css';
import TodoList from "./components/TodoList";
import {ITodo} from './types/todo'

const App: FC = () => {

    const [value, setValue] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([])

    const deleteTodo = (id: number): void => {
        setTodos(todos.filter( todo => todo.id !== id ))
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo

            return {
                ...todo,
                completed: !todo.completed
            }
        }))
    }

    const addTodo = () => {
        setTodos([...todos, {
            id: Date.now(),
            task: value,
            completed: false
        }])

        setValue('')
    }

    return (
        <div className="App">
            <input type="text" className="taskInput" value={value} onChange={ e => setValue(e.target.value) }/>
            <button onClick={addTodo}>Add</button>
            <div className="todos">
                <TodoList items={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            </div>
        </div>
    );
}

export default App;
