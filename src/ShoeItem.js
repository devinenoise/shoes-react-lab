import React, { Component } from 'react'
export default class ShoeItem extends Component {
    render() {
        return (
            <div>
                <li id="shoe-list">
                    <h1>{this.props.data.name}</h1>
                    <h3>brand: {this.props.brand}</h3>
                    <img class="shoe-images" src={this.props.data.url} alt={this.props.data.name} />
                    <h3>Type: {this.props.data.type}</h3>
                    <h3>laces: {this.props.data.laces}</h3>
                </li>
            </div>
        )
    }
}