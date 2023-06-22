import styles from "./list-matches.module.scss";

export default function ListMatches({ matches, route }) {
  return (
    <div className={styles.container}>
      {matches && matches.length > 0 ? (
        <p className={styles.pTagMatch}>Your matches</p>
      ) : (
        <p className={styles.pTagMatch}>No matches yet</p>
      )}
      {matches &&
        matches.length > 0 &&
        matches.map((match) => {
          return (
            <div key={match.id + 1} className={styles.listMatches}>
              <h3 className={styles.match}>
                {route === "company"
                  ? `${match.first_name} ${match.last_name}`
                  : `${match.name}`}
              </h3>
            </div>
          );
        })}
    </div>
  );
}
