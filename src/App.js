import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import { GlobalStyleIconfont } from './statics/iconfont/iconfont';
import Header from './common/header';
import Home from './pages/home';
import Login from './pages/login';
import Detail from './pages/detail/loadable';
import Write from './pages/write';
import store from './store';

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <GlobalStyleIconfont/>
        <GlobalStyle/>
        <BrowserRouter>
          <Header/>
          <Route path='/' exact component={Home}></Route>
          <Route path='/login/' exact component={Login}></Route>
          <Route path='/write/' exact component={Write}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
