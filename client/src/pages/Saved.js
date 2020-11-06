import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results";

class Saved extends Component {

    render() {
        return (
            <div className="container">
                <h2>Saved books</h2>
                <Results books={this.state.savedBooks} />
            </div>
        )
    }
}

export default Saved;