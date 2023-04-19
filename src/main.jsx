import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/index.css'
import rootReducer from './reducers'
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(rootReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>,
  </Provider>
)
