import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProjectContainer from './containers/projectContainer.js';
import ResumeContainer from './containers/resumeContainer.js';
import AboutContainer from './containers/aboutContainer.js';
import AboutDialog from './components/aboutDialog.js';
import CommunityWebContainer from './containers/communityWebContainer.js';
import CommunityMobContainer from './containers/communityMobContainer.js';
import FridgrContainer from './containers/fridgrContainer.js';
import MoodifyContainer from './containers/moodifyContainer.js';
import Main from './components/mainBody.js';
import ProjectDialog from './components/projectDialog.js';
import { toggleAboutDialog, toggleProjectDialog, importProjectDialog,
  changeSliderIndex, toggleHovering } from './actions.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title typewriter">
            <h1>MELVIN HSIEH</h1>
          </div>
          <div id="buttonContainer">
            <ProjectContainer
              dialog={this.props.dialog}
            />
            <AboutContainer
              dialog={this.props.dialog}
              changeSliderIndex={this.props.changeSliderIndex}
              toggleAboutDialog={this.props.toggleAboutDialog}
            />
            <ResumeContainer/>
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
        <div id="bodyContainer">
          <Main
            dialog={this.props.dialog}
            toggleHovering={this.props.toggleHovering}
            changeSliderIndex={this.props.changeSliderIndex}
            toggleProjectDialog={this.props.toggleProjectDialog}
            importProjectDialog={this.props.importProjectDialog}
          />
        </div>
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
    changeSliderIndex: changeSliderIndex,
    toggleHovering: toggleHovering
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(App);

/* <CommunityWebContainer
  dialog={this.props.dialog}
  changeSliderIndex={this.props.changeSliderIndex}
  toggleProjectDialog={this.props.toggleProjectDialog}
  importProjectDialog={this.props.importProjectDialog}
  toggleHovering={this.props.toggleHovering}
/>
<CommunityMobContainer
  dialog={this.props.dialog}
  changeSliderIndex={this.props.changeSliderIndex}
  toggleProjectDialog={this.props.toggleProjectDialog}
  importProjectDialog={this.props.importProjectDialog}
  toggleHovering={this.props.toggleHovering}
/>
<FridgrContainer
  dialog={this.props.dialog}
  changeSliderIndex={this.props.changeSliderIndex}
  toggleProjectDialog={this.props.toggleProjectDialog}
  importProjectDialog={this.props.importProjectDialog}
  toggleHovering={this.props.toggleHovering}
/>
<MoodifyContainer
  dialog={this.props.dialog}
  changeSliderIndex={this.props.changeSliderIndex}
  toggleProjectDialog={this.props.toggleProjectDialog}
  importProjectDialog={this.props.importProjectDialog}
  toggleHovering={this.props.toggleHovering}
/> */
