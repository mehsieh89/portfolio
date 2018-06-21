const initialState = {
  showAboutDialog: false,
  showProjectDialog: false,
  sliderIndex: 0,
  projectsHover: false,
  isHovering: [false, false, false, false, false],
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
    var newState = Object.assign({}, state);
    newState.currentProject = action.payload;
    return newState;

  case 'CHANGE_SLIDER_INDEX' :
    var newState = Object.assign({}, state);
    newState.sliderIndex = action.payload;
    return newState;

  case 'TOGGLE_IS_HOVERING':
    var newState = Object.assign({}, state);
    newState.isHovering[action.index] = action.payload;
    return newState;

  case 'TOGGLE_PROJECTS_HOVERING':
    var newState = Object.assign({}, state);
    newState.projectsHover = action.payload;
    return newState;

  default:
    return state;
  }
}
