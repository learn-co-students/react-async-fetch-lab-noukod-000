// create your App component here
import React, { Component } from 'react'


export default class App extends Component{

    constructor(){
        super()
        this.state = {
            people: []
        }
    }

    componentDidMount(){
        var url = `http://api.open-notify.org/astros.json`

        fetch(url)
        .then(res => res.json())
        .then(data => {
            const {people, number, message } = data
            this.setState({ people })
        })
        .catch(error => console.error('Error:', error));

    }


    People = () => this.state.people.map(person => <Person name={person.name} craft={person.craft}/>)

    render(){

        return(
            <div className="PeopleContainer">
                {this.People()}
            </div>
            
        )
    }
}