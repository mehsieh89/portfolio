export const toggleAboutDialog = () => {
  return {
    type: 'TOGGLE_ABOUT_DIALOG',
  };
};

export const toggleProjectDialog = () => {
  return {
    type: 'TOGGLE_PROJECT_DIALOG',
  };
};

export const importProjectDialog = (prop) => {
  return {
    type: 'IMPORT_PROJECT_DIALOG',
    payload: prop
  };
};

export const changeSliderIndex = (prop) => {
  return {
    type: 'CHANGE_SLIDER_INDEX',
    payload: prop
  };
};

export const decrementSliderIndex = () => {
  return {
    type: 'DECREMENT_SLIDER_INDEX',
  };
};

export const incrementSliderIndex = () => {
  return {
    type: 'INCREMENT_SLIDER_INDEX',
  };
};
