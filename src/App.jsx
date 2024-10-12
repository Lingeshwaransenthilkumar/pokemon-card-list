import { useState } from "react";
import "./App.css";
import Card from "./card";


function App() {
  // State for the search query
  const [searchField, setSearchField] = useState("");

  // Handle the input change and set the search query state
  const handleChange = (e) => {
    setSearchField(e.target.value.toLowerCase());
  };

  return (
    <>
      <section className="main">
        <div className="nav">
          <div className="logo">
            <img src="/src/assets/pokemon-logo.png" alt="" />
          </div>
          <div className="title">
            <h3>Pokemon-list</h3>
          </div>
          <div className="search">
            <input
              type="search"
              placeholder="Search Pokemon"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="cards">
          {/* Pass the searchField as a prop to the Card component */}
          <Card searchField={searchField} />
        </div>
      </section>
    </>
  );
}

export default App;