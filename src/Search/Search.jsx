
import React, { useState } from "react";

function Search({onSearch}) {
    const[search, setsearch] = useState('')

  const handleChange = (e) => setsearch(e.target.value);
  function handleSearch() {
    onSearch(search)

  }
  return (
    <div>
      <input
      style={{
        width: "200px",
        height: "20px",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
        type="text"
        value={search}
        onChange={handleChange}
        id="input"
      />
      <button style={{
        background: "none",
        color: "green",
        padding: "10px 20px",
        cursor: "pointer",
      }}onClick={handleSearch} id="button">
        Search User
      </button>
    </div>
  );
}

export default Search;