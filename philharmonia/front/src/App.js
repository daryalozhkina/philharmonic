import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/User";
import ConcertList from "./components/Concert";
import ConcertDetail from "./components/ConcertDetail";
import ItemList from "./components/Item";
import axios from "axios";
import LoginForm from "./components/LoginForm";

const API_URL = "http://127.0.0.1:8000";
const getResourceURL = (suffix) => `${API_URL}/api/${suffix}/`;


class App extends React.Component {
    constructor(props) {
        super(props);
        this.setState({
            'users': [],
            'concerts': [],
            'items': [],
        })

       componentDidMount()
        {
            axios
                .get(getResourceURL("users"))
                .then((result) => {
                    // console.log('users result:', result)
                    this.setState({
                        users: result.data
                    })
                })
                .catch((error) => console.log(error));
            axios
                .get(getResourceURL("concerts"))
                .then((result) => {
                    this.setState({
                        concerts: result.data
                    })
                })
                .catch((error) => console.log(error));
            axios
                .get(getResourceURL("concert-items"))
                .then((result) => {
                    this.setState({
                        items: result.data
                    })
                })
                .catch((error) => console.log(error));

    }
    render() {
        // console.log('state', this.state);
        return (
        <div className="main">
                <Router>
                    <Header/>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    <Route exact path="/users">
                        <UserList users={this.state.users}/>
                    </Route>
                    <Route exact path="/projects">
                        <ConcertList concerts={this.state.concerts}/>
                    </Route>
                    <Route exact path="/concerts/detail/:id">
                        <ConcertDetail concerts={this.state.concerts}
                                       users={this.state.users}/>
                    </Route>
                    <Route exact path="/items">
                        <ItemList items={this.state.items}/>
                    </Route>
                    <Route exact path="/login">
                        <LoginForm />
                    </Route>
                </Router>
                <Footer/>
            </div>
        )
    }
}
export default App;