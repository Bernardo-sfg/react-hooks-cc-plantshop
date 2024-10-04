import React from "react";

function Search() {
  return (

    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        // onChange={(e) => serachValue = search.value}
      />
    </div>
  );
}

// export {searchValue};
export default Search;
