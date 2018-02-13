// export const changeName = (text) => {
//   return {
//     type: 'CHANGE_NAME',
//     payload: text
//   };
// };

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
