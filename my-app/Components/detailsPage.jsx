import ProgressBar from "@ramonak/react-progress-bar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Pokemon.module.css";

const DetailsPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const [poke, setPoke] = useState();

  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPoke(data);
    }
    getData();
  }, [id]);

  return (
    <div className={styles.detailCardContainer}>
      <div className={styles.detailCard}>
        <img src="https://i.gifer.com/7A6p.gif" className={styles.cardImg} />
        {poke ? (
          <>
            <div className={styles.cardContainer}>
              <h1 className={styles.pokemonName}>{poke.name}</h1>
              <div className={styles.text}>
                Experience:{" "}
                <span className={styles.results}>{poke.base_experience}</span>
              </div>
              <div className={styles.text}>
                Height: <span className={styles.results}> {poke.height}</span>
              </div>
              <div className={styles.moves}>
                Moves:{" "}
                {poke.moves.map((item, i) => {
                  if (i >= 5) {
                    return;
                  }
                  return (
                    <div className={styles.moveName} key={i}>
                      <span className={styles.results}>{item.move.name}</span>{" "}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.stats}>
              <h3 className={styles.stat}>Statistics</h3>
              {poke.stats.map((stat, i) => {
                i++;
                if (i >= 6) {
                  return;
                }
                return (
                  <div className={styles.statistics}>
                    <div className={styles.statCount}>Stat {i}</div>
                    <ProgressBar
                      completed={stat.base_stat}
                      className={styles.progressBar}
                      barContainerClassName={styles.container}
                      completedClassName={styles.barCompleted}
                    />
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className={styles.select}>
            <span className={styles.selection}>
              Choose your favorite pokemon from the list
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
