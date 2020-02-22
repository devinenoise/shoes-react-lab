import React, { Component } from 'react'
import { GetShoes } from './ShoeApi'
import ShoeItem from './ShoeItem';


export default class Detail extends Component {
    state = { shoe: {} }
    async componentDidMount() {
        const data = await GetShoes(this.props.match.params.shoeId);
        if (data.body.results) { this.setState({ shoe: data.body }) }
    }
    render() {
        const { shoe } = this.state;


        return (
            <ShoeItem data={shoe} />
        );
    }
}