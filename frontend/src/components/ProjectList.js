import React from 'react'
import {Link} from "react-router-dom";


const ProjectItem = ({project, deleteProject}) => {
    return (
        <tr>
            <td>{project.project_name}</td>
            <td>{project.rep_link}</td>
            <td>{project.user}</td>
            <td><button onClick={()=>deleteProject(project.id)}>Delete</button>
            </td>|
        </tr>
    )
}

const ProjectList = ({projects, deleteProject}) => {
    return (

                <div>
            <Link to="/project/create">create</Link>
        <table className="table">
            <tr>
                <th>Name</th>
                <th>Link</th>
                <th>User</th>
                <th> delete </th>|
            </tr>
            {projects.map((project) => <ProjectItem project={project} deleteProject={deleteProject}/>)}
        </table>
                </div>
    )
}

export default ProjectList