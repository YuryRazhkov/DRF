import React from 'react'


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>{project.project_name}</td>
            <td>{project.rep_link}</td>
            <td>{project.user}</td>
        </tr>
    )
}

const ProjectList = ({projects}) => {
    return (
        <table className="table">
            <tr>
                <th>Name</th>
                <th>Link</th>
                <th>User</th>
            </tr>
            {projects.map((project) => <ProjectItem project={project}/>)}
        </table>
    )
}

export default ProjectList