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

function Card() {
  return (
    <section className="section-card">
      <div className="filters">
        <span>Lista de Pokemon</span>
      </div>

      <div className="card electric">
        <div className="card-header">
          <span className="id">#25</span>
          <span className="name">Pikachu</span>
        </div>

        <div className="card-image">
          <img src="pikachu.png" alt="Pikachu" />
        </div>
        <button className="card-btn">Ver detalles</button>
      </div>

      <div className="card fire">
        <div className="card-header">
          <span className="id">#4</span>
          <span className="name">Charmander</span>
        </div>

        <div className="card-image">
          <img src="charmander.png" alt="Charmander" />
        </div>
        <button className="card-btn">Ver detalles</button>
      </div>

      <div className="card water">
        <div className="card-header">
          <span className="id">#7</span>
          <span className="name">Squirtle</span>
        </div>

        <div className="card-image">
          <img src="squirtle.png" alt="Squirtle" />
        </div>
        <button className="card-btn">Ver detalles</button>
      </div>

      <div className="card plant">
        <div className="card-header">
          <span className="id">#1</span>
          <span className="name">Bulbasaur</span>
        </div>

        <div className="card-image">
          <img src="bulbasaur.png" alt="Bulbasaur" />
        </div>

        <button className="card-btn">Ver detalles</button>
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
        <Card />
      </section>
    </>
  );
}

export default App;
