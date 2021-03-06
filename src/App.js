import React from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import About from './components/about';
import Resume from './components/resume';
import Projects from './components/project';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="app">
      <div className="container app__container">
        <div className="row  app__row">
          <div className="col-lg-3">
                 <Sidebar />
          </div>

          <div className="col-lg-9 app__main-content">
            <Navbar />
            <Switch>
              <Route exact path="/">
                <About />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          </div>
        </div>
       </div>
      </div>
    </Router>
  );
}

export default App;
