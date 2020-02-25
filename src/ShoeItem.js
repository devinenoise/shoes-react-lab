import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class ShoeItem extends Component {
    render() {

        const { data } = this.props;

        return (
            <div className="shoe-box">
                <li id="shoe-list">
                    <h1>{this.props.data.name}</h1>
                    <h3>brand: {this.props.data.brand}</h3>
                    <img className="shoe-images" src={this.props.data.url} alt={this.props.data.name} />
                    <h3>Type: {this.props.data.type}</h3>
                    <p>laces: {String(this.props.data.laces)}</p>
                    <Link to={`update/${data.id}`}> Update </Link>
                </li>
            </div>
        )
    }
}
