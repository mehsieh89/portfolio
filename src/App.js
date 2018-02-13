import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Resume from './components/resume.js';
import About from './components/about.js';
import AboutDialog from './components/aboutDialog.js';
import CommunityWeb from './components/communityWeb.js';
import CommunityMobile from './components/communityMobile.js';
import FridgrMobile from './components/fridgrMobile.js';
import Moodify from './components/moodify.js';
import Profile from './components/profilePicture.js';
import ProjectDialog from './components/projectDialog.js';
import { toggleAboutDialog, toggleProjectDialog, importProjectDialog } from './actions.js';
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
          <h1 className="App-title"> Mel Hsieh </h1>
          <CommunityWeb
            dialog={this.props.dialog}
            toggleProjectDialog={this.props.toggleProjectDialog}
            importProjectDialog={this.props.importProjectDialog}
          />
          <CommunityMobile
            dialog={this.props.dialog}
            toggleProjectDialog={this.props.toggleProjectDialog}
            importProjectDialog={this.props.importProjectDialog}
          />
          <FridgrMobile
            dialog={this.props.dialog}
            toggleProjectDialog={this.props.toggleProjectDialog}
            importProjectDialog={this.props.importProjectDialog}
          />
          <Moodify
            dialog={this.props.dialog}
            toggleProjectDialog={this.props.toggleProjectDialog}
            importProjectDialog={this.props.importProjectDialog}
          />
          <Resume/>
          <About
            dialog={this.props.dialog}
            toggleAboutDialog={this.props.toggleAboutDialog}
          />
        </header>
        <AboutDialog
          dialog={this.props.dialog}
          toggleAboutDialog={this.props.toggleAboutDialog}
        />
        <ProjectDialog
          dialog={this.props.dialog}
          toggleProjectDialog={this.props.toggleProjectDialog}
        />
        <Profile/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dialog: state.dialog,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleAboutDialog: toggleAboutDialog,
    toggleProjectDialog: toggleProjectDialog,
    importProjectDialog: importProjectDialog,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(App);
