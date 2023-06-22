import styles from "./list-culture-types.module.scss";
export default function ListCultureTypes({ cultureTypes }) {
  return (
    <div className={styles.container}>
      {cultureTypes.length > 0 &&
        cultureTypes.map((cultureType) => {
          return (
            <div key={cultureType.id} className={styles.listMatches}>
              <div className={styles.match}>
                <h3 className={styles.name}>{cultureType.name}</h3>
                <p className={styles.range}>
                  Lower end: {cultureType.lower_end.toFixed(2)}
                </p>
                <p className={styles.range}>
                  Upper end: {cultureType.upper_end.toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
