import React from 'react';
import {BrowserRouter, Route, Switch, HashRouter} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Teachers from "./Teachers";
import Courses from "./Courses";
import NotFound from "./NotFound";
import Featured from "./Featured";

const App = () => (
  <HashRouter basename="/practice-react-router">
      <div className="container">
              <Header />
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" render={ () => <About title="Aboot" /> } />
              <Route exact path="/teachers" component={Teachers} />
              <Route path="/teachers/:topic/:name" component={Featured} />
              <Route path="/courses" component={Courses} />
              <Route component={NotFound} />
          </Switch>
      </div>
  </HashRouter>
);

export default App;