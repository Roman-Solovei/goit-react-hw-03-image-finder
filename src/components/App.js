import React, { Component } from "react";
import "./App.module.css"
import Searchbar from "./Searchbar/Searchbar"
import Button from "./Button/Button";

// const axios = require('axios').default;


export default class App extends Component { 
    state = {
        panding: true,
        page: 1,
        pagination: 12,
        searchQuery: "",
        key: "24779492-e45231f5fdfd8f5bb8624d13c",
        mainUrl: "https://pixabay.com/api/",
        searchSettings: "?image_type=photo&orientation=horizontal&safesearch=true&",
        error: null,
        images:[],
    }

    componentDidUpdate() {
        // if (this.state.panding) {
            fetch(
                `${this.state.mainUrl}?q=${this.state.searchQuery}&page=${this.state.page}&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=${this.state.pagination}`).then(response => {
                    if (response.ok) {
                        // console.log(response.json())
                        return response.json()
                        // console.log(response.json())
                    }
                    // return Promise.reject(new Error("Sorry, there are no images matching your search query. Please try again."))
                }
                ).then(console.log).catch((error) => this.setState({ error: error })
            )
        // }
    };

    setQuery = (event) => {
        // console.log(event)
    this.setState({ searchQuery: event.currentTarget.value })
    };
    
    searchReset = (event) => {
        event.preventDefault()
        this.setState({ page: 1, images: [] })
    };
    render() {
        return(
        <div>
            {/* {this.state.error && <h1>{this.state.error.message}</h1>} */}
            <Searchbar  
                setQuery={this.setQuery}    
                searchQueryValue={this.state.searchQuery}                
                searchReset={this.searchReset}    
            />
        </div>)
     }

}
// export default App;