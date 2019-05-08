// create your App component here
import React from 'react';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      peoples: []
    };
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json)
    .then(data=>{
      this.setState({
        peoples: data.people
      });
    });
  }

  render(){
    return(<div></div>);
  }
}
