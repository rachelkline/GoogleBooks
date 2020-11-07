import React from "react";
import "./style.css";

function SearchForm(props){
return (
  <div className="container">
  <form>
    <div className="form-group">
    <br />
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search for a book..."
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn">
        Search
        </button>
    </div>
  </form>
  </div>
);
}

export default SearchForm;
