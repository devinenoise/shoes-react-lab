import React, { Component } from 'react'
export default class ShoeItem extends Component {
    render() {
        return (
            <div class="shoe-box">
                <li id="shoe-list">
                    <h1>{this.props.data.name}</h1>
                    <h3>brand: {this.props.data.brand}</h3>
                    <img class="shoe-images" src={this.props.data.url} alt={this.props.data.name} />
                    <h3>Type: {this.props.data.type_id}</h3>
                    <p>laces: {String(this.props.data.laces)}</p>
                </li>
            </div>
        )
    }
}