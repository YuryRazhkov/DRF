import React from 'react'
import {Link} from 'react-router-dom';


const TodoItem = ({note, deleteToDo}) => {
    return (
        <tr>
            <td>{note.id}</td>|
            <td>{note.project_id}</td>|
            <td>{note.body_todo}</td>|
            <td>{note.create_date}</td>|
            <td>{note.update_date}</td>|
            <td>{note.user}</td>|
            <td>{note.is_done}</td>|
            <td><button onClick={()=>deleteToDo(note.id)}>Delete</button>
            </td>|

        </tr>
    )
}

const TodoList = ({todo, deleteToDo}) => {
    return (
        <div>
            <Link to="/todo/create">create</Link>

        <table className="table-bordered">
                <tr>
                    <th>note_id</th>|
                    <th>project_id</th>|
                    <th>body</th>|
                    <th>create_date</th>|
                    <th>update_date</th>|
                    <th>user</th>|
                    <th>is_done</th>|
                    <th> delete </th>|
                </tr>
                {todo.map((note) => <TodoItem note={note} deleteToDo={deleteToDo}/>)}

            </table>

        </div>
    )
}

export default TodoList