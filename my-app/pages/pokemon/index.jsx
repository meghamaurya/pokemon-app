import Link from "next/link";

export async function getStaticProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const data = await response.json();

  return {
    props: {
      pokemon: data.results,
    },
  };
}

function PokemonList({ pokemon }) {
  console.log(pokemon, "data");
  let i;
  return (
    <>
      <div>
        <img
          src={
            "https://res.cloudinary.com/lmn/image/upload/c_limit,h_360,w_640/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinnyc/a/6/0/a6078c-2fd9033b2be04c9b947d1aac6cdaef60-a2551.gif"
          }
          width={160}
          height={40}
        ></img>
        {pokemon &&
          pokemon.map((poke, i) => {
            i++;
            return (
              <>
                <Link href={`/detailsPage/${i}`}>{poke.name}</Link>
              </>
            );
          })}
      </div>
    </>
  );
}

export default PokemonList;
