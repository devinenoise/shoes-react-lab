import React, { Component } from 'react'
import { getShoe } from './ShoeApi'


// import ShoeItem from './ShoeItem';


export default class Detail extends Component {
    state = { shoe: {} }

    async componentDidMount() {
        const data = await getShoe(this.props.match.params.shoeId);
        
        if (data.body) { this.setState({ shoe: data.body[0] }) }

        console.log(this.state.shoe);
    }
    render() {

        return (
            <>
            { this.state.shoe && 
            <div>
            
            <h1 className="shoe-name">{this.state.shoe.name}</h1>
            <h3 className="shoe-name">Brand: {this.state.shoe.brand}</h3>
            <img className="shoe-images" src={this.state.shoe.url} alt={this.state.shoe.name} />
            {/* <h3>Type: {this.state.shoe.type_id}</h3> */}
            <p>Laces: {String(this.state.shoe.laces)}</p>
            </div>
            }
            </>
        );
    }
}