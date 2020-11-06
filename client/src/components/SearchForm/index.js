import React from "react";

function Search() {
    return (
        <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="search"><h2>Search & Save Books of Interest</h2></label>
            <input
              name="search"
              type="text"
              className="form-control"
              placeholder="Search a Book"
              id="search"
            />
            <button className="btn btn-dark mt-3 mb-5">
              Search
              </button>
          </div>
        </form>
        </div>
    )
}

export default Search;