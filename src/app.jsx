
import React from 'react';
import '../styles/index.scss';

import Home from './home.jsx';

import HelloWorld from './Testing.jsx';

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
        <HelloWorld />
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/test" component={HelloWorld}/>
          </Switch>
        </Router>
      </div>
    );
  }
}
