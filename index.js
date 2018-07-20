import {h, app} from 'hyperapp';
import { Link, Route, location } from "@hyperapp/router"

import state from './src/state';
import actions from './src/actions';
import Home from './src/components/Home';
import About from './src/components/About';

const view = (state, actions) => {

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Route path="/" render={Home} />
      <Route path="/about" render={About} />
    </div>
  );
}


const main = app(state, actions, view, document.body);
const unsubscribe = location.subscribe(main.location);