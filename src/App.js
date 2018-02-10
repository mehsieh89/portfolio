import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeName } from './actions.js';
import Resume from './components/resume.js';
import About from './components/about.js';
import AboutDialog from './components/aboutDialog.js';
import CommunityWeb from './components/communityWeb.js';
import CommunityMobile from './components/communityMobile.js';
import FridgrMobile from './components/fridgrMobile.js';
import Moodify from './components/moodify.js';
import Profile from './components/profilePicture.js';
import { toggleAboutDialog } from './actions.js';
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
          <CommunityWeb/>
          <CommunityMobile/>
          <FridgrMobile/>
          <Moodify/>
          <Resume/>
          <About
            aboutDialog={this.props.aboutDialog}
            toggleAboutDialog={this.props.toggleAboutDialog}
          />
        </header>
        <AboutDialog
          aboutDialog={this.props.aboutDialog}
          toggleAboutDialog={this.props.toggleAboutDialog}
        />
        <Profile/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    aboutDialog: state.aboutDialog,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeName: changeName,
    toggleAboutDialog: toggleAboutDialog,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(App);
