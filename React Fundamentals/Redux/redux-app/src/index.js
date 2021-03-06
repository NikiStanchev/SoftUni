import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import App from './App'

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import generatorReducer from './reducer'


let store = createStore(generatorReducer)


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
