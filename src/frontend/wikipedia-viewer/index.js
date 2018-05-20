import React, { Component } from "react";
import axios from "axios";
import SearchBox from "./searchbox";
import WikiCard from "./wikicard";
import "./wikipedia-viewer.scss";


export default class WikipediaViewer extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getRandomArticle = this.getRandomArticle.bind(this);

        this.state = {
            keyword: "",
            query: {
                search: [
                    { pageid: "", title: "", snippet: "" }
                ]
            },
            titleposition: "h1 justify-content-center"

        };
    }


    componentDidMount() {

    }

    handleSubmit(e) {
        e.preventDefault();
        axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${this.state.keyword} 
        &prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20`)
            .then(res => this.setState({ query: res.data.query }))
            .then(this.setState({ titleposition: "h4 justify-content-left", collapse: "collapse" }))
            .then(this.showSearchResults());
    }

    handleChange(value) {
        this.setState({ keyword: value });
    }

    getRandomArticle(e) {
        e.preventDefault();
        window.open("https://en.wikipedia.org/wiki/Special:Random");
    }

    showSearchResults() {
        return this.state.query.search.map(item => <WikiCard key={item.pageid} title={item.title} snippet={item.snippet} />);
    }

    render() {
        return (
            <div className="wikipedia-viewer jumbotron">
                <div className={`row ${this.state.titleposition}`}>Wikipedia Viewer</div>
                <hr className={`p-5 ${this.state.collapse}`}/>
                <SearchBox keyword ={this.state.keyword} handleChange={this.handleChange} handleSubmit={this.handleSubmit} randomArticle={this.getRandomArticle}/>
                <div className="row">
                    {(this.state.query.searchinfo !== undefined) && this.showSearchResults()}
                </div>
            </div>
        );
    }
}
