import React from "react";

export default function Search({ handleSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="type to search ..."
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
}
