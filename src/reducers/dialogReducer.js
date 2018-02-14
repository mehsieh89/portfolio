const initialState = {
  showAboutDialog: false,
  showProjectDialog: false,
  currentProject: {
    name: null,
    pathName: null,
    githubURL: null,
    dimensions: {
      height: '',
      width: '',
    }
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

  default:
    return state;
  }
}
