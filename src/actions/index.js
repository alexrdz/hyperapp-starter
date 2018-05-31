export default {
  down: value => state => ({count: state.count - 1}),

  up(value) {
    return state => ({count: state.count + 1});
  }
};