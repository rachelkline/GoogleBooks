import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class Results extends Component {

    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    handleSave = book => {

        if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
            API.deleteBook(book._id)
                .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id) }))
                .catch(err => console.error(err));
        } else {
            API.saveBook(book)
                .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
                .catch(err => console.error(err));
        }
    }

    render() {
        return (
            <div className="textCont">
                {!this.props.books.length ? (
                    <h1 className="head">No Results to Display</h1>
                ) : (
                        <div className="align">
                            {this.props.books.map(result => (
                                <div className="text-center" key={result._id}>
                                    <div className="row card">
                                        <div className="row head"><img alt={result.title} src={result.image} /></div>
                                        <div className="col-md-10">
                                            <div className="card-body">
                                           <h5 className="card-title"> {result.title} by {result.authors} 
                                            </h5>
                                        
                                        
                                                <p className="card-text">{result.description}</p>
                                                <div>
                                                <button className="bttn"><a href={result.link}>View</a></button>

                                                    <button onClick={() => this.handleSave(result)} className="bttn" >
                                                        {this.state.savedBooks.map(book => book._id).includes(result._id) ? "Unsave" : "Save"}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        )
    }
}

export default Results;
