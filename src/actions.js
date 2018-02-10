export const changeName = (text) => {
  return {
    type: 'CHANGE_NAME',
    payload: text
  };
};

export const toggleAboutDialog = () => {
  return {
    type: 'TOGGLE_ABOUT_DIALOG',
  };
};
