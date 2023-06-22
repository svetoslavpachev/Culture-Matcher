export default function SearchBar({ search, setSearch }) {
  return (
    <input
      className="searchbar"
      type="text"
      placeholder="Search"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
  );
}
