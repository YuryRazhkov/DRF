import React from 'react'

class ToDoForm extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            project_id: 0,
            body_todo: '',
            create_date: '',
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
        this.props.createTodo(this.state.project_id, this.state.body_todo, this.state.create_date, this.state.user)

            event.preventDefault()
            }

    render() {
        return (
            <form onSubmit={(event)=> this.handleSubmit(event)}>
                <div className="form-group">
                <label for="project_id">project_id</label>
                <input type="number" className="form-control" name="project_id"
                value={this.state.project_id} onChange={(event)=>this.handleChange(event)} />
                </div>

                <div className="form-group">
                <label for="body_todo">body</label>
                <input type="text" className="form-control" name="body_todo"
                value={this.state.body_todo} onChange={(event)=>this.handleChange(event)} />
                </div>

                <div className="form-group">
                <label htmlFor="user">user</label>
                <input type="number" className="form-control" name="user"
                value={this.state.user} onChange={(event) => this.handleChange(event)}/>
                </div>

                <div className="form-group">
                <label htmlFor="create_date">date</label>
                <input type="date" className="form-control" name="create_date"
                value={this.state.create_date} onChange={(event) => this.handleChange(event)}/>
                </div>

                <input type="submit" className="btn btn-primary" value="Save" />


            </form>
        );
        }
        }
export default ToDoForm


