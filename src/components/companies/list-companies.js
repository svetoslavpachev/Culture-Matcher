import Link from "next/link";

export default function ListCompanies({ comp, search }) {
  return (
    <div>
      {comp.length > 0 &&
        comp
          .filter((comp) => {
            if (comp.name?.toLowerCase().includes(search?.toLowerCase())) {
              return comp;
            } else if (search === "") {
              return comp;
            }
          })
          .map((cm) => {
            return (
              <ul key={cm.id}>
                <li className="list-item">
                  <Link href={`companies/${cm.id}`}>{cm.name}</Link>
                </li>
              </ul>
            );
          })}
    </div>
  );
}
