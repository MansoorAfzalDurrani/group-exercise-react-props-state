import  joke  from '../joke';
interface ChuckJokeProps {
  joke: joke;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({ joke }) => {
  return (
    <div key={joke.id}>
      <p>{joke.joke }</p>
    </div>
  );
  
}
export default ChuckJoke;




