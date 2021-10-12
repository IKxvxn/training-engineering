const SearchBar = props => {
  const { filterWord, setFilterWord } = props;
  return (
    <div className="main__welcome-container">
      <h2 className="main__title">Los mejores agentes de seguridad</h2>
      <div className="main__search-container">
        <input
          id="companies-search-input"
          value={filterWord}
          onChange={e => {
            setFilterWord(e.target.value);
          }}
          className="main__search-input"
          placeholder="Buscar por Ubicación"
          type="search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
