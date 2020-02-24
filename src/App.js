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
import Header from './Header.js';
// import ShoeItem from './ShoeItem';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Link className="nav" to="/">Home</Link>
          <Link className="nav" to="/AddShoe/New">Add A Shoe</Link>
          {/* <Link to="/about-me/about">about me</Link> */}


          <Switch>
            <Route exact path="/:shoes?" component={ShoeList} />
            <Route exact path="/shoes/:shoeId" component={Detail} />
            <Route path="/:AddShoe/New" component={AddShoe} />

            {/* <Route exact path="/" component={AboutMe} /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}