import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Pokemon.module.css";
import DetailsPage from "@/Components/detailsPage";

export async function getStaticProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const data = await response.json();

  return {
    props: {
      pokemon: data.results,
    },
  };
}

function Pokemon({ pokemon }) {
  const router = useRouter();
  const activeId = router.query.id;

  return (
    <div className={styles.appContainer}>
      <div className={styles.pokeList}>
        <img
          src="https://res.cloudinary.com/lmn/image/upload/c_limit,h_360,w_640/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinnyc/a/6/0/a6078c-2fd9033b2be04c9b947d1aac6cdaef60-a2551.gif"
          className={styles.logo}
        />
        {pokemon.map((poke, i) => {
          i++;
          return (
            <Link
              key={i}
              href={`/pokemon/?id=${i}`}
              className={`${styles.pokeName} ${
                i == activeId ? styles.active : ""
              }`}
            >
              {poke.name}
            </Link>
          );
        })}
      </div>
      <div className={styles.detailspage}>
        <DetailsPage />
      </div>
    </div>
  );
}

export default Pokemon;
