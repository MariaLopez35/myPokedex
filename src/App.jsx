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

function App() {
  return (
    <>
      <Header />
      <section className="main">
        <SearchBar />
      </section>
    </>
  );
}

export default App;
