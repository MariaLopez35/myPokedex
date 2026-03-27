import "./App.css";
import logo from "/logo.png";
import { getAll } from "./services/services";
import { useEffect, useState } from "react";

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
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const pokemonList = async () => {
      const allPokemon = await getAll();
      setPokemonList(allPokemon);
    };

    pokemonList();
  }, []);

  console.log(pokemonList);

  return (
    <section className="section-card">
      <div className="filters">
        <span>Lista de Pokemon</span>
      </div>

      {pokemonList.map((pokemon) => {
        const mainType = pokemon.types[0].type.name;

        return (
          <div key={pokemon.id} className={`card ${mainType}`}>
            <div className="card-header">
              <span className="id">#{pokemon.id}</span>
              <span className="name">{pokemon.name}</span>
            </div>

            <div className="card-image">
              <img src={pokemon.image} alt={pokemon.name} />
            </div>

            <button className="card-btn">Ver detalles</button>
          </div>
        );
      })}
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
