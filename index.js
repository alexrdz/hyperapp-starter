import {h, app} from 'hyperapp';
import state from './src/state';
import actions from './src/actions';
import Counter from './src/components/Counter';

const view = (state, actions) => {
  const {count} = state;

  return (
    <div>
      <h1>This is a HyperApp Counter</h1>
      <Counter count={count} actions={actions} />
    </div>  
  );
}

const main = app(state, actions, view, document.body);