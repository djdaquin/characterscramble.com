
import React from 'react';
import '../styles/index.scss';
import bootstrap from 'bootstrap';

import Home from './home.jsx';
import Test from './test.jsx';

import TitleBar from './title.jsx';
import Sidebar from './sidebar.jsx';

// routing component
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';


export default class App extends React.Component {
  render() {
    return(
      <div>
        <TitleBar />
        <Sidebar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/hello" component={Test}/>
          </Switch>
        </Router>
      </div>
    );
  }
}
