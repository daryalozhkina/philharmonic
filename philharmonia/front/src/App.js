import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import {BrowserRouter as Router, NavLink as Link, Route} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/User";
import ConcertList from "./components/Concert";
import ItemList from "./components/Item";

const usersMock = [
    {
        "id": 1,
        "username": "Darya",
        "gender": "f",
        "date_birth": null
    },
    {
        "id": 2,
        "username": "Victor",
        "gender": "m",
        "date_birth": null
    },
    {
        "id": 3,
        "username": "Victor",
        "gender": "m",
        "date_birth": null
    },
    {
        "id": 4,
        "username": "Victor",
        "gender": "m",
        "date_birth": null
    },
    {
        "id": 5,
        "username": "Victor",
        "gender": "m",
        "date_birth": null
    },
    {
        "id": 6,
        "username": "Victor",
        "gender": "m",
        "date_birth": null
    },
    {
        "id": 7,
        "username": "Victor",
        "gender": "m",
        "date_birth": null
    }
];

const concertsMock = [
    {
        "id": 1,
        "name": "Концерт 1",
        "desc": "Благотворительный концерт",
        "created": "2021-09-20T10:30:05.450821Z",
        "updated": "2021-09-23T13:26:23.400821Z",
        "audience": "Иванов Виктор",
    },
    {
        "id": 2,
        "name": "Концерт 2",
        "desc": "Первый концерт абонементного цикла Фортепианный",
        "created": "2021-09-25T15:14:14.402344Z",
        "updated": "2021-09-27T15:14:14.402344Z",
        "audience": "Иванов Виктор",
    }
];

const ConcertItemsMock = [
    {
        "id": 1,
        "name": "Танец",
        "concert": 1,
    },
    {
        "id": 2,
        "name": "Песня",
        "concert": 1,
    },
    {
        "id": 3,
        "name": "Песня",
        "concert": 2,
    }
];


class App extends React.Component {
    constructor(props) {
        super(props);
        this.setState( state: {
            'users': [],
            'concerts': [],
            'items': []
        })
    }


 componentDidMount() {
        this.setState({
            concerts: concerts
        })
    }
    render() {
        return (
            <div className="main">
                <Router>
                    <Header/>
                    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                        <Link to={"/"}
                              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                            Philharmonic
                        </Link>
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <Link to={"/users"} className="nav-link">
                                    Users
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/concerts"} className="nav-link">
                                    Концерты
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/items"} className="nav-link">
                                    Номера
                                </Link>
                            </li>
                        </ul>
                    </header>

                    <Route exact path="/">
                        <Main/>
                    </Route>
                    <Route exact path="/users">
                        <UserList users={this.state.users}/>
                    </Route>
                    <Route exact path="/concerts">
                        <ConcertList concerts={this.state.concerts}/>
                    </Route>
                    <Route exact path="/items">
                        <ItemList items={this.state.items}/>
                    </Route>
                </Router>
                <Footer/>
            </div>
        )
    }
}
export default App;