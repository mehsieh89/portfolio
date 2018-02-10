const initialState = {
  showAboutDialog: false,
};

export default function(state = initialState, action) {
  switch (action.type) {

  case 'TOGGLE_ABOUT_DIALOG':
    return Object.assign({}, state, { showAboutDialog: !state.showAboutDialog });

  default:
    return state;
  }
}
