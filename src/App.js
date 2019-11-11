// create your App component here
import React, { Component } from 'react';
export default class App extends React.Component {    
      state = {
        people: []
      }
    
      render() {
        return(
        <div>
          {this.state.people.map(person => person.name)}
        </div>
      )
      }
    
      componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
          .then(response => response.json())
          .then(data => {
            this.setState = {
              people: data.people
            }
          })
      }
    
    }