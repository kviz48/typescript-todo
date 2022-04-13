import {FC} from 'react';
import {ITodo} from "../types/todo";

interface ITodoItem extends ITodo {
    toggleTodo: (id: number) => void
    deleteTodo: (id: number) => void
}

const TodoItem: FC<ITodoItem> = (props) => {
    const { id, task, completed, toggleTodo, deleteTodo } = props

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '15px'
        }}>
            <input type="checkbox" checked={completed} onChange={ () => toggleTodo(id) }/>
            <p style={{fontSize: '20px'}}> {task} </p>
            <button style={{
                background: 'transparent',
                border: '1px solid black',
                borderRadius: '5px',
                outline: 'none',
                color: 'red',
                marginLeft: '15px'
            }}
            onClick={ () => deleteTodo(id) }
            >Delete</button>
        </div>
    );
};

export default TodoItem;