import Link from "next/link";

export default function ListCompanies({ comp, setComp, search }) {
  return (
    <div>
      {comp.length > 0 &&
        comp
          .filter((comp) => {
            if (comp.name.toLowerCase().includes(search.toLowerCase())) {
              return comp;
            } else if (search === "") {
              return comp;
            }
          })
          .map((cm) => {
            return (
              <div key={cm.id}>
                <Link href={`companies/${cm.id}`}>{cm.name}</Link>
              </div>
            );
          })}
    </div>
  );
}
