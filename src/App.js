import React from 'react';
import './App.css';
import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
import ShoeList from './ShoeList.js';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Header /> */}
          <Link to="/">Home</Link>
          {/* <Link to="/about-me/about">about me</Link> */}
          <Switch>
            <Route path="/" component={ShoeList} />
            {/* <Route exact path="/" component={Detail} /> */}
            {/* <Route exact path="/" component={AboutMe} /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}