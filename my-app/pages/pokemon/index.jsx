export async function getStaticProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  console.log(response, "respom");
  const data = await response.json();
  console.log(data.results, "res");

  return {
    props: {
      pokemon: data.results,
    },
  };
}

function PokemonList({ pokemon }) {
  console.log(pokemon, "data");

  return (
    <div>
      <h2>heading</h2>
      {pokemon &&
        pokemon.map((poke) => {
          return <>{poke.name}</>;
        })}
    </div>
  );
}

export default PokemonList;
