const initialState = {
  showAboutDialog: false,
  showProjectDialog: false,
  sliderIndex: null,
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

  default:
    return state;
  }
}
