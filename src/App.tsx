import { useEffect } from "react";
import "./styles.css";

import { FaSearch } from "react-icons/fa";

export default function App() {
  return (
    <div className="App">
      <div className="search-container">
        <input
          style={{ border: "none", width: "100%" }}
          type="search"
          placeholder="search city"
        />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
