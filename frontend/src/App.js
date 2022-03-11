import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from "./components/UserList";
import axios from 'axios'
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import {HashRouter, BrowserRouter, Route, Routes, Link, useLocation, Navigate} from 'react-router-dom'
import ProjectList from "./components/ProjectList";
import TodoList from "./components/TodoList";



const NotFound = () => {
    let location = useLocation()
    return (
        <div> Page {location.pathname} not found </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users':[],
            'projects':[],
            'todo':[],
        }
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                const users = response.data
                this.setState(
                    {
                        'users' : users
                    }
                )
                })
            .catch(error => console.log((error)))

        axios.get('http://127.0.0.1:8000/api/Projects/')
            .then(response => {
                const projects = response.data
                this.setState(
                    {
                        'projects' : projects
                    }
                )
                })
            .catch(error => console.log((error)))

        axios.get('http://127.0.0.1:8000/api/ToDo/')
            .then(response => {
                const todo = response.data
                this.setState(
                    {
                        'todo' : todo
                    }
            )
            })
            .catch(error => console.log((error)))

    }


    render() {
        return (
                <div>
                    <BrowserRouter>
                         <nav>
                        <li><Link to='/'>Users</Link></li>
                        <li><Link to='/projects'>Project</Link></li>
                        <li><Link to='/todo'>Todo</Link></li>
                    </nav>

                        <Routes>
                            <Route exact path ='/' element={ <UserList users={this.state.users} />} />}
                            <Route exact path ='/projects' element = { <ProjectList projects={this.state.projects}/>}/>}
                            <Route exact path ='/todo' element = { <TodoList todo={this.state.todo}/>}/>}
                            <Route path="*" element = {<NotFound />} />
                        </Routes>

                    </BrowserRouter>
                </div>


        );
    }
}



export default App;
