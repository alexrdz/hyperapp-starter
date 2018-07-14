import state from '../state';
import actions from '../actions';

describe('actions', () => {
  describe('up', () => {
    test('increments `count` by 1', () => {
      const newState = actions.up()(state);
      expect({count: 1}).toEqual(newState);
    });
  });
  describe('down', () => {
    test('decrements `count` by 1', () => {
      const newState = actions.down()(state);
      expect({count: -1}).toEqual(newState);
    });
  });
});