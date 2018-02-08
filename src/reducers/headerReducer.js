export default function(state = 'Mel Hsieh', action) {
  switch (action.type) {
  case 'CHANGE_NAME':
    return action.payload;
  default:
    return state;
  }
}
