export default function ListCultureTypes({ cultureTypes }) {
  return (
    <div>
      {cultureTypes.length > 0 &&
        cultureTypes.map((cultureType) => {
          return (
            <div key={cultureType.id}>
              <h3>{cultureType.name}</h3>
              <p>Lower end: {cultureType.lower_end}</p>
              <p>Upper end: {cultureType.upper_end}</p>
            </div>
          );
        })}
    </div>
  );
}
