import React from 'react';
import './App.css';
import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
import ShoeList from './ShoeList.js';
import Detail from './Detail.js';
import AddShoe from './AddShoe.js';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Header /> */}
          <Link class="nav" to="/">Home</Link>
          <Link class="nav" to="/AddShoe/New">Add A Shoe</Link>
          {/* <Link to="/about-me/about">about me</Link> */}
          
          
          <Switch>
            <Route exact path="/" component={ShoeList} />
            <Route exact path="/:shoeId" component={Detail} />
            <Route exact path="/:AddShoe/New" component={AddShoe} />

            {/* <Route exact path="/" component={AboutMe} /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}