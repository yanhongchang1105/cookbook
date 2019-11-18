import React from 'react';
import { Layout } from './pages/home/layout'
import { List } from './pages/list/'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/index' component={Layout}></Route>
          <Route path='/list' component={List}></Route>
          <Redirect from='/' to="/index"></Redirect>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
