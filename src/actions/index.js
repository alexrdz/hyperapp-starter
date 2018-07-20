import {location} from '@hyperapp/router';

export default {
  down: value => state => ({count: state.count - 1}),

  up(value) {
    return state => ({count: state.count + 1});
  },

  fetchPeople() {
    return function (state, actions) {
      fetch("https://swapi.co/api/people/")
        .then(res => res.json())
        .then(data => actions.setPeople(data));
    }
  },

  setPeople({ results }) {
    console.log('results', results);
    return function (state)  {
      return { people: results };
    }
  },

  location: location.actions
};