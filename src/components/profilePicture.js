import React, { Component } from 'react';
import Projects from '../media/projectsReel.gif';

class Profile extends Component {
  render() {
    return (
      <div id="profileDiv">
        <img className="profilePicture" src={Projects} alt=""/>
      </div>
    );
  }
}

export default Profile;
