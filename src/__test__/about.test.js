import { h } from 'hyperapp';
import state from '../state';
import actions from '../actions';
import About from '../components/About';

describe('About', () => {
  const component = About()(state,actions);
  
  test('renders a `div`', () => {
    expect(component.nodeName).toBe('div');
  });
})