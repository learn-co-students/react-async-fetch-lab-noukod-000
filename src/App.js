import React from 'react'

export default class App extends React.Component {

    state = {
        people: []
    }
    
    render() {

    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json()
        .then(people => this.state.people = people))
    }
}