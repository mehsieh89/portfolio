import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import allReducers from './reducers/index.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducers);

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <Provider store={store} >
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>, document.getElementById('root')
);

registerServiceWorker();

// const muiTheme = getMuiTheme({
//   palette: {
//     accent1Color: deepOrange500
//   },
//   raisedButton: {
//     primaryColor: '#31575B',
//     secondaryColor: '#C22B33'
//   },
//   flatButton: {
//     textColor: '#31575B',
//     primaryTextColor: '#31575B',
//     secondaryColor: '#C22B33'
//   },
//   tabs: {
//     backgroundColor: 'white',
//   },
//   tab: {
//     fontWeight: 'bold',
//   },
//   theme: {
//     fontFamily: 'Roboto'
//   },
//   datePicker: {
//     selectColor: '#31575B',
//   },
//   timePicker: {
//     accentColor: '#31575B',
//     clockColor: '#31575B',
//     headerColor: '#31575B',
//   },
//   textField: {
//     focusColor: '#31575B',
//   },
//   dialog: {
//     textColor: '#C22B33',
//   }
// });
