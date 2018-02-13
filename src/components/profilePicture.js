import React, { Component } from 'react';
import CommunityMobSS from '../media/communityMob.jpg';

class Profile extends Component {
  render() {
    return (
      <div id="profileDiv">
        <img className="profilePicture" src={CommunityMobSS} alt=""/>
      </div>
    );
  }
}

export default Profile;
