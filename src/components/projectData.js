import CommunityMobDemo from '../media/communityMobDemo.gif';
import CommunityWebDemo from '../media/communityWebDemo.gif';
import FridgrMob from '../media/fridgrMobJPG.jpg';
import MoodifyImage from '../media/moodifyDemo.gif';
import ConnectFourGif from '../media/connectFourGif.gif';

export const commMob = {
  name: 'community mobile app',
  pathName: CommunityMobDemo,
  githubURL: 'https://github.com/Warriorcodez/community-mobile',
  dimensions: {
    height: '325px',
    width: '500px',
  },
  description: "Mobile variation of the Community application. Built for socialites who are already out and about or are feeling spontaneous."
}

export const commWeb = {
  name: 'community web app',
  pathName: CommunityWebDemo,
  githubURL: 'https://github.com/Warriorcodez/community',
  dimensions: {
    height: '325px',
    width: '500px',
  },
  description: "What if I told you there is an app on the market that allows you to explore and create social events based on geolocation.",
}

export const fridgr = {
  name: 'fridgr mobile app',
  pathName: FridgrMob,
  githubURL: 'https://github.com/ninjacodez/fridgr',
  dimensions: {
    height: '325px',
    width: '500px',
  },
  description: "Fridgr is a mobile application built for homes with co-habitants. The application manages inventories with interactive lists and includes a barcode scanning input system."
}

export const moodify = {
  name: 'moodify web app',
  pathName: MoodifyImage,
  githubURL: 'https://github.com/ninjacodez/moodify',
  dimensions: {
    height: '325px',
    width: '500px',
  },
  description: "Moodify utilizes the Watson API to analyze emotions portrayed in song lyrics. Lyrics are pulled from MusixMatch and song clips are pulled from Spotify.",
}

export const connectFour = {
  name: 'connect four',
  pathName: ConnectFourGif,
  githubURL: 'https://github.com/mehsieh89/connectFour/tree/master',
  dimensions: {
    height: '325px',
    width: '500px',
  },
  description: "Front-end only, Connect Four game. Takes in two player names and alternates their turns as players drop chips. Click the Gif to play!"
}
