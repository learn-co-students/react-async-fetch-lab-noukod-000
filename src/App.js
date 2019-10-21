// create your App component here

import React, { component } from 'react';

export default class App extends React.Component {

    constructor(){
        super()
        this.state = {
            peopleInSpace: []
        }
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(({people}) => this.setState({
            peopleInSpace: people
        }) )
    }

    render(){
        return(
            <div>
                {this.state.peopleInSpace.map( (person) => <h1 key={this.id} > {person.name} </h1> )}
            </div>
        )
    }
}
