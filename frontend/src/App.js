import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from "./components/UseList";
import axios from 'axios'
import Footer from "./components/Footer";
import Menu from "./components/Menu";



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users':[]
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
    }

    render() {
        return (
                <div>
                    <div>
                        <Menu/>
                    </div>
                        <div>
                            <p> App Users </p>
                            <UserList users={this.state.users}/>
                        </div>
                            <div>
                             <Footer/>
                     </div>


                </div>



        )
    }
}



export default App;
