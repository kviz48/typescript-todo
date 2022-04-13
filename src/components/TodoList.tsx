import {FC, ReactNode} from 'react';
import {ITodo} from "../types/todo";
import TodoItem from "./TodoItem";

interface ITodoList {
    items: ITodo[]
    toggleTodo: (id: number) => void
    deleteTodo: (id: number) => void
}

const TodoList: FC<ITodoList> = (props) => {
    const {items, toggleTodo, deleteTodo} = props

    return (
        <div>
            {items.map( todo =>
                <TodoItem
                    id={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            )}
        </div>
    );
};

export default TodoList;