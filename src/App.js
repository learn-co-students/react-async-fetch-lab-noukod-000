// create your App component here
import React, { Component } from 'react'
// import { Person } from './person'


export default class App extends Component{

    constructor(){
        super()
        this.state = {
            people: []
        }
    }

    componentDidMount(){
        const url = `http://api.open-notify.org/astros.json`

        fetch(url)
        .then(res => {
            if(!res.ok) throw res.statusText
            return res.json()
        })
        .then(data => {
            const {people, number, message } = data
            this.setState({ people })
        })
        .catch(e => {
            alert(e)
        })

    }


    constructPeople = () => this.state.people.map(p => <Person name={p.name} craft={p.craft}/>)

    render(){

        return(
            <div className="PeopleContainer">
                {this.constructPeople()}
            </div>
            
        )
    }
}