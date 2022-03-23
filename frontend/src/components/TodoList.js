import React from 'react'


const TodoItem = ({note}) => {
    return (
        <tr>
            <td>{note.project_id}</td>|
            <td>{note.body_todo}</td>|
            <td>{note.create_date}</td>|
            <td>{note.update_date}</td>|
            <td>{note.user}</td>|
            <td>{note.is_done}</td>|
        </tr>
    )
}

const TodoList = ({todo}) => {
    return (
        <table className="table-bordered">
            <tr>
                <th>project_id</th>|
                <th>body</th>|
                <th>create_date</th>|
                <th>update_date</th>|
                <th>user</th>|
                <th>is_done</th>|
            </tr>
            {todo.map((note) => <TodoItem note={note}/>)}
        </table>
    )
}


export default TodoList