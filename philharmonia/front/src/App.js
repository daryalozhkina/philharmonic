import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectList from "./components/Project";


const Concerts = [
    {'name': "Концерт Николая Орланова", 'created': "2021-09-15"},
    {'name': "Концерт в честь Алексадра Невского", 'created': "2021-09-11"}
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
        console.log('state', this.state);
        return (
            <div>
                <Header />
                    Philharmonic
                    <ConcertList concerts={this.state.concerts}/>
                <Footer />
            </div>
        )
    }
}

export default App;