import 'bootstrap/dist/css/bootstrap.min.css';
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
import RegisterForm from "./components/RegisterForm";

const API_URL = "http://127.0.0.1:8000";
const getResourceURL = (suffix) => `${API_URL}/api/${suffix}/`;


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            concerts: [],
            items: [],
            accessToken: this.getAccessToken(),
        };
    }

    componentDidMount() {
        this.loadState()
    }

    loadState() {
        let headers = this.getHeaders();
        axios
            .get(getResourceURL("users"), {headers: headers})
            .then((result) => {
                this.setState({
                    users: result.data
                })
            })
            .catch((error) => console.log(error));
        axios
            .get(getResourceURL("concerts"), {headers: headers})
            .then((result) => {
                this.setState({
                    concerts: result.data
                })
            })
            .catch((error) => console.log(error));
        axios
            .get(getResourceURL("concert-items"), {headers: headers})
            .then((result) => {
                this.setState({
                    items: result.data
                })
            })
            .catch((error) => console.log(error));

    }

    login(username, password) {
        axios
            .post(getResourceURL("token"),
                {"username": username, "password": password})
            .then((result) => {
                let refreshToken = result.data.refresh;
                let accessToken = result.data.access;
                console.log(accessToken)

                this.saveTokens(refreshToken, accessToken)
                this.setState({accessToken: accessToken}, this.loadState)
            })
            .catch((error) => console.log(error));
    }

    register(username, password1, password2, email) {
        console.log('do register', username, password1, password2, email);
    }

    logout() {
        localStorage.setItem('refreshToken', null);
        localStorage.setItem('accessToken', null);
        this.clearState();
    }

    clearState() {
        this.setState({
            accessToken: null,
            users: [],
            concerts: [],
            items: [],
        })
    }

    saveTokens(refreshToken, accessToken) {
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('accessToken', accessToken);
    }

    getAccessToken() {
        return localStorage.getItem('accessToken')
    }

    isAuthenticated() {
        return this.state.accessToken !== 'null' && this.state.accessToken !== null;
    }

    getHeaders() {
        let headers = {
            'Content-Type': "application/json"
        }
        if (this.isAuthenticated()) {
            headers['Authorization'] = `Bearer ${this.state.accessToken}`
        }

        return headers;
    }

    render() {
        return (
            <div className="main">
                <Router>
                    <Header isAuthenticated={this.isAuthenticated()}
                            logout={() => this.logout()}/>
                    <Header/>
                    <Route exact path="/users">
                        <UserList users={this.state.users}/>
                    </Route>
                    <Route exact path="/concerts">
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
                        <LoginForm
                            login={(username, password) => this.login(username, password)}/>
                    </Route>
                    <Route exact path="/register">
                        <RegisterForm
                            register={(username, password1, password2, email) =>
                                this.register(username, password1, password2, email)}/>
                    </Route>
                </Router>
                <Footer/>
            </div>
        )
    }
}

export default App;