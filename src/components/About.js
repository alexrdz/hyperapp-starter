import { h } from 'hyperapp';
import People from './People';

const About = () => (state, actions) => {
  const {people} = state;
  console.log(people);

  return (
    <div 
      className="about"
    >
      About Component
      <People people={state.people} />
    </div>
  )
};

export default About;