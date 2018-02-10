const initialState = {
  showAboutDialog: false,
  showProjectDialog: false,
};

export default function(state = initialState, action) {
  switch (action.type) {

  case 'TOGGLE_ABOUT_DIALOG':
    return Object.assign({}, state, { showAboutDialog: !state.showAboutDialog });

  case 'TOGGLE_PROJECT_DIALOG':
    return Object.assign({}, state, { showProjectDialog: !state.showProjectDialog });

  default:
    return state;
  }
}
