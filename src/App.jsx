import "./App.css";
import logo from "/logo.png";

function Header() {
  return (
    <header>
      <div className="header">
        <img className="logo" src={logo} alt="Logo" />
      </div>
    </header>
  );
}

function SearchBar() {
  return (
    <section className="section-search">
      <div className="input-search">
        <input
          className="input"
          type="text"
          name="search"
          placeholder="Buscar Pokémon..."
        />
        <button className="search-button">Buscar</button>
      </div>
    </section>
  );
}

function Filters() {
  return (
    <section className="section-filters">
      <div className="filters">
        <span>Filtrar por Tipo</span>
      </div>
      <div className="all-buttons">
        <div>
          <button className="filter-btn filter-btn--all">Todos</button>
        </div>
        <div>
          <button className="filter-btn filter-btn--fire">Fuego</button>
        </div>
        <div>
          <button className="filter-btn filter-btn--water">Agua</button>
        </div>
        <div>
          <button className="filter-btn filter-btn--plant">Planta</button>
        </div>
        <div>
          <button className="filter-btn filter-btn--electric">Eléctrico</button>
        </div>
        <div>
          <button className="filter-btn filter-btn--other">Otros</button>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <section className="main">
        <SearchBar />
        <Filters />
      </section>
    </>
  );
}

export default App;
