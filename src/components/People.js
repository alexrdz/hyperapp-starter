import { h } from 'hyperapp';

const People = (props) => {
  const {people} = props;
  const peopleList = people.map(p => <li key={people.created}>{people.name}</li>);

  return (
    <div>
      <h2>les people</h2>
      {people && peopleList}
    </div>
  );
};

export default People;