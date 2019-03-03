import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {isLoading: true}
  }

  componentDidMount() {
      this.setState({isLoading: false})
  }

  renderLoading(){
    return <div>Loading...</div>
  }

  renderHome(){
    return  <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  }
  render() {
    return (
      this.state.isLoading ? this.renderLoading() : this.renderHome()
    );
  }
}

export default App;
