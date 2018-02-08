import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeName } from './actions.js';
import Resume from './components/resume.js';
import Profile from './components/profilePicture.js';
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.props.name}</h1>
        </header>
        <Resume/>
        <Profile/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeName: changeName,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(App);
