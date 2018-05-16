const initialState = {
  showAboutDialog: false,
  showProjectDialog: false,
  sliderIndex: 0,
  currentProject: {
    name: null,
    pathName: null,
    githubURL: null,
    dimensions: {
      height: '',
      width: '',
    },
    description: '',
  },
};

export default function(state = initialState, action) {
  switch (action.type) {

  case 'TOGGLE_ABOUT_DIALOG':
    return Object.assign({}, state, { showAboutDialog: !state.showAboutDialog });

  case 'TOGGLE_PROJECT_DIALOG':
    return Object.assign({}, state, { showProjectDialog: !state.showProjectDialog });

  case 'IMPORT_PROJECT_DIALOG' :
    let newState = Object.assign({}, state);
    newState.currentProject = action.payload;
    return newState;

  case 'CHANGE_SLIDER_INDEX' :
    let newState2 = Object.assign({}, state);
    newState2.sliderIndex = action.payload;
    return newState2;

  case 'INCREMENT_SLIDER_INDEX' :
    let newState3 = Object.assign({}, state);
    if (newState3.sliderIndex === 3) {
      newState3.sliderIndex = 0;
    } else {
      newState3.sliderIndex++;
    }
    return newState3;

  case 'DECREMENT_SLIDER_INDEX' :
    let newState4 = Object.assign({}, state);
    if (newState4.sliderIndex === 0) {
      newState4.sliderIndex = 3;
    } else {
      newState4.sliderIndex = newState3.sliderIndex--;
    }
    return newState4;

  default:
    return state;
  }
}
