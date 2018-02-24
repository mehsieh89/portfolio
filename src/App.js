import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ResumeContainer from './containers/resumeContainer.js';
import AboutContainer from './containers/aboutContainer.js';
import AboutDialog from './components/aboutDialog.js';
import CommunityWebContainer from './containers/communityWebContainer.js';
import CommunityMobContainer from './containers/communityMobContainer.js';
import FridgrContainer from './containers/fridgrContainer.js';
import MoodifyContainer from './containers/moodifyContainer.js';
import Main from './components/mainBody.js';
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
          <div id="selfContainer">
            <ResumeContainer/>
            <AboutContainer
              dialog={this.props.dialog}
              toggleAboutDialog={this.props.toggleAboutDialog}
            />
          </div>
          <h1 className="App-title"> MELVIN HSIEH </h1>
          <div id="buttonContainer">
            <CommunityWebContainer
              dialog={this.props.dialog}
              toggleProjectDialog={this.props.toggleProjectDialog}
              importProjectDialog={this.props.importProjectDialog}
            />
            <CommunityMobContainer
              dialog={this.props.dialog}
              toggleProjectDialog={this.props.toggleProjectDialog}
              importProjectDialog={this.props.importProjectDialog}
            />
            <FridgrContainer
              dialog={this.props.dialog}
              toggleProjectDialog={this.props.toggleProjectDialog}
              importProjectDialog={this.props.importProjectDialog}
            />
            <MoodifyContainer
              dialog={this.props.dialog}
              toggleProjectDialog={this.props.toggleProjectDialog}
              importProjectDialog={this.props.importProjectDialog}
            />
          </div>
        </header>
        <AboutDialog
          dialog={this.props.dialog}
          toggleAboutDialog={this.props.toggleAboutDialog}
        />
        <ProjectDialog
          dialog={this.props.dialog}
          toggleProjectDialog={this.props.toggleProjectDialog}
        />
        <Main
          dialog={this.props.dialog}
          toggleProjectDialog={this.props.toggleProjectDialog}
          importProjectDialog={this.props.importProjectDialog}
        />
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
