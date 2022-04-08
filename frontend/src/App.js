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
import Loginform from "./components/LoginForm";
import LoginForm from "./components/LoginForm";




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
            'token': ''
        }
    }


        deleteToDo(id) {
        let headers = this.getHeader()
        console.log(id)
        console.log(headers)
        axios
            .delete(`http://127.0.0.1:8000/api/ToDo/${id}`, {headers})
            .then(response => {
                // this.setState({
                //     'todo': this.state.todo.filter((todo) => todo.id != id)
                // })
                this.getData()
            })
            .catch(error => {
                console.log(error)
            })

    }


    getData() {
         let headers = this.getHeader()

         axios.get('http://127.0.0.1:8000/api/users/', {headers})
            .then(response => {
                const users = response.data
                this.setState(
                    {
                        'users' : users
                    }
                )
                })
            .catch(error => console.log((error)))



        axios.get('http://127.0.0.1:8000/api/Projects/', {headers})
            .then(response => {
                const projects = response.data
                this.setState(
                    {
                        'projects' : projects
                    }
                )
                })
            .catch(error => console.log((error)))

        axios.get('http://127.0.0.1:8000/api/ToDo/', {headers})
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

     componentDidMount() {
        let token = localStorage.getItem('token')
        this.setState({
            'token': token
        }, this.getData)
    }

    isAuth() {
        return !!this.state.token
    }

    getHeader() {
        if (this.isAuth()) {
            return {
                'Authorization': 'Token ' + this.state.token
            }
        }
        return {}
    }

    getToken(login, password) {
        console.log(login, password)
        axios
            .post('http://127.0.0.1:8000/api-auth-token/', {'username': login, 'password': password})
            .then(response => {
                const token = response.data.token
                console.log(token)
                localStorage.setItem('token', token)
                this.setState({
                    'token': token
                }, this.getData)
            })
            .catch(error => console.log(error))
    }

    logout() {
        localStorage.setItem('token', '')
        this.setState({
            'token': ''
        }, this.getData)
    }



    render() {
        return (
                <div>
                    <BrowserRouter>
                         <nav>
                        <li><Link to='/'>Users</Link></li>
                        <li><Link to='/projects'>Project</Link></li>
                        <li><Link to='/todo'>Todo</Link></li>
                        <li>
                            { this.isAuth() ? <button onClick={()=>this.logout()} >Logout</button> : <Link to='/login'>Login</Link> }
                        </li>

                         </nav>

                        <Routes>
                            <Route exact path ='/' element={ <UserList users={this.state.users} />} />}
                            <Route exact path ='/projects' element = { <ProjectList projects={this.state.projects}/>}/>}
                            {/*<Route exact path ='/todo' element = { <TodoList todo={this.state.todo}/>}/>}*/}
                            <Route exact path ='/todo' element = { <TodoList todo={this.state.todo} deleteToDo={(id)=>this.deleteToDo(id)} />} />



                            <Route exact path ='/login' element = { <LoginForm getToken={(login, password) => this.getToken(login, password)} />} />
                            <Route path="*" element = {<NotFound />} />
                        </Routes>

                    </BrowserRouter>
                </div>


        );
    }
}



export default App;
