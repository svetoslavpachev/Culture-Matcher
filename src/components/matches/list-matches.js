export default function ListMatches({ matches, route }) {
  return (
    <div>
      {matches && matches.length > 0 ? (
        <p>Your matches</p>
      ) : (
        <p>No matches yet</p>
      )}
      {matches &&
        matches.length > 0 &&
        matches.map((match) => {
          return (
            <div key={match.id + 1}>
              <h3>
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
