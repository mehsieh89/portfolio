import React, { Component } from 'react';
import { Dialog } from 'material-ui';
import selfImage from '../media/selfImage.jpg';
import resume from '../media/resume.pdf';
import FontAwesome from 'react-fontawesome';
import ReactTooltip from 'react-tooltip';

class AboutDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: false,
      email: false,
      linkedIn: false,
      github: false,
      normal: "white",
      hovered: "#A9B7C0"
    };
  }

  renderCheck = (name) => {
    let output = name;
    if (name === "email") {
      output = "e-mail";
    }
    if (this.state[name]) {
      return (<ReactTooltip
                delayShow={200}
                className='contactTooltip animated fadeIn'
                id={name}
                effect='solid'
                border={true}
              >
                <span> {output} </span>
              </ReactTooltip>)
    } else {
      return null;
    }
  }

  handleOnGithub = () => {
    window.open('https://github.com/mehsieh89');
  }

  handleOnLinkedin = () => {
    window.open('https://www.linkedin.com/in/melvin-hsieh');
  }

  handleOnResume = () => {
    window.open(resume);
  }

  handleOnEmail = () => {
    window.location.href = `mailto:mailto:mehsieh89@gmail.com`;
  }

  handleClose = () => {
    this.props.toggleAboutDialog();
  }

  onMouseEnter = (event) => {
    const stateKey = event.target.dataset.name;
    this.setState({ [stateKey]: true });
  }

  onMouseLeave = (event) => {
    const stateKey = event.target.dataset.name;
    this.setState({ [stateKey]: false });
  }

  render() {
    if (this.props.dialog.showAboutDialog) {
      return (
        <Dialog
          title={
            <div id="dialogTitleContainer">
              <div id="aboutTitle" className="animated lightSpeedIn"> contact </div>
              <div id="dialogIconContainerBox">
                <div id="dialogIconContainer" className="animated rollIn">
                  <FontAwesome
                    className='dialogIcon'
                    data-tip data-for="resume"
                    id="resumeIcon"
                    data-name="resume"
                    style={this.state.resume ? {color: this.state.hovered} : {color: this.state.normal}}
                    name='file-text'
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    onClick={this.handleOnResume}
                  />
                </div>
                {this.renderCheck('resume')}
                <div id="dialogIconContainer" className="animated rollIn">
                  <FontAwesome
                    className='dialogIcon'
                    data-tip data-for="email"
                    id="emailIcon"
                    style={this.state.email ? {color: this.state.hovered} : {color: this.state.normal}}
                    data-name="email"
                    name='envelope-square'
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    onClick={this.handleOnEmail}
                  />
                </div>
                {this.renderCheck('email')}
                <div id="dialogIconContainer" className="animated rollIn">
                  <FontAwesome
                    className='dialogIcon'
                    data-tip data-for="linkedIn"
                    data-name="linkedIn"
                    style={this.state.linkedIn ? {color: this.state.hovered} : {color: this.state.normal}}
                    name='linkedin-square'
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    onClick={this.handleOnLinkedin}
                  />
                </div>
                {this.renderCheck('linkedIn')}
                <div id="dialogIconContainer" className="animated rollIn">
                  <FontAwesome
                    className='dialogIcon'
                    data-tip data-for="github"
                    data-name="github"
                    style={this.state.github ? {color: this.state.hovered} : {color: this.state.normal}}
                    name='github'
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    onClick={this.handleOnGithub}
                  />
                </div>
                {this.renderCheck('github')}
              </div>
            </div>
          }
          onRequestClose={this.handleClose}
          open={this.props.dialog.showAboutDialog}
          titleStyle={styles.title}
          bodyStyle={styles.body}
        >
          <div id="aboutDialogDiv">
            <img id='aboutIMG' className="animated fadeIn" src={selfImage} alt="" height="400" width="300"></img>
            <div id="aboutTextDiv">
              <div id="aboutDesc" className="animated fadeIn">
                "Hello!
                I'm a full stack software engineer in the Bay Area.
                Have a look around and enjoy.
                This site is always being worked on!
                Hope to hear from you!" - Mel
              </div>
            </div>
          </div>
        </Dialog>
      );
    } else { return null }
  }
}

const styles = {
  buttonLabel: {
    textTransform: 'lowercase',
    fontFamily: "HelveticaNeue",
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'white',
  },
  button1: {
    position: 'relative',
    right: '10px',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100px',
    display: 'block',
  },
  button2: {
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100px',
    display: 'block',
  },
  button3: {
    position: 'relative',
    left: '10px',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100px',
    display: 'block',
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: 'white',
    fontFamily: "HelveticaNeue",
    textAlign: 'left',
    backgroundColor: '#A9B7C0',
  },
}

export default AboutDialog;
