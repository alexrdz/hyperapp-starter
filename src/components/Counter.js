import {h} from 'hyperapp';

const Counter = (props) => {
  const {
    count, 
    actions: {down, up}
  } = props;

  return (
    <main>
      <h1>{count}</h1>
      <button onclick={down}> - </button>
      <button onclick={up}> +   </button>
    </main>
  );
};

export default Counter;