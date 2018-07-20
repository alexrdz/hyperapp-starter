import { h } from 'hyperapp';
import { Link } from '@hyperapp/router';

import { Counter } from './Counter';

const Home = () => (state, actions) => {
  
  return (
    <div>
      <h1>This is a HyperApp Counter</h1>
      <Link to="/about">About</Link>
      <Counter count={state.count} actions={actions} />
    </div>
  );
};

export default Home;