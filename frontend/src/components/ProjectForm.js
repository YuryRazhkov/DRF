import React from 'react'

class ProjectForm extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            project_name: '',
            rep_link: '',
            user: 0,
            }
        }

    handleChange(event)
        {
        this.setState(
        {
                [event.target.name]: event.target.value
            }
                    );
        }

    handleSubmit(event) {
        this.props.createProject(this.state.project_name, this.state.rep_link, this.state.user)

            event.preventDefault()
            }

    render() {
        return (
            <form onSubmit={(event)=> this.handleSubmit(event)}>
                <div className="form-group">
                <label for="project_name">project_name</label>
                <input type="text" className="form-control" name="project_name"
                value={this.state.project_name} onChange={(event)=>this.handleChange(event)} />
                </div>

                <div className="form-group">
                <label for="rep_link">rep_link</label>
                <input type="text" className="form-control" name="rep_link"
                value={this.state.rep_link} onChange={(event)=>this.handleChange(event)} />
                </div>

                <div className="form-group">
                <label htmlFor="user">user</label>
                <input type="number" className="form-control" name="user"
                value={this.state.user} onChange={(event) => this.handleChange(event)}/>
                </div>

                <input type="submit" className="btn btn-primary" value="Save" />


            </form>
        );
        }
        }
export default ProjectForm


