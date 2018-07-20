import { h } from 'hyperapp';
import state from '../state';
import actions from '../actions';

import Home from '../components/Home';

describe('Home', () => {
  const component = Home()(state, actions);

  test('renders a `div`', () => {
    expect(component.nodeName).toBe('div');
  });
});