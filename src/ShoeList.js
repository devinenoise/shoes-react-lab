import React, { Component } from 'react'
import ShoeItem from "./ShoeItem.js";
import request from 'superagent';
// import SearchBar from './SearchBar.js';
import { Link } from 'react-router-dom'


export default class ShoeList extends Component {
    state = {
        // searchQuery: this.props.match.params.name,
        shoes: [],
    }
    async componentDidMount() {
        const data = await request.get(`https://rocky-basin-80195.herokuapp.com/api/shoes`)
        this.setState({ shoes: data.body })
    }
    // handleChange = (e) => this.setState({ searchQuery: e.target.value })
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.shoes.map(shoe =>
                            <Link to={`shoes/${shoe.name}`} key={shoe.name}>
                                <ShoeItem data={shoe} />
                            </Link>)
                    }
                </ul>
            </div>
        )
    }
}



// handleSearch = async (e) => {
//     e.preventDefault();
//     const data = await request.get(`https://rocky-basin-80195.herokuapp.com/api/shoes${this.state.searchQuery}`)
//     this.setState({
//         shoes: data.body.results,
//     })
//     this.props.history.push(this.state.searchQuery)
// }
// <header>
//     <SearchBar
//         searchQuery={this.state.searchQuery}
//         handleSearch={this.handleSearch}
//         handleChange={this.handleChange}
//     />
// </header>