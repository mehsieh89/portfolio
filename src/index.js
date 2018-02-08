import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';
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
