import './App.css'
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

function App() {


  return (
    <>
     <Header />
    </>
  )
}

export default App
