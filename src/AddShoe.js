import React, { Component } from 'react'
import request from 'superagent';




export default class AddShoe extends Component {
    state = {
        types: [],
        laces: true,
        type: 1,
    };
    componentDidMount = async () => {
        const types = await request.get(`https://rocky-basin-80195.herokuapp.com/api/shoes`);
        this.setState({ types: types.body });
    }
    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }
    handleBrandChange = (e) => {
        console.log(e.target.value)
        this.setState({ brand: Number(e.target.value) })
    }
    handleImageChange = (e) => {
        this.setState({ image: e.target.value })
    }
    handleTypeChange = (e) => {
        this.setState({ type: Number(e.target.value) })
    }
    handleLacesChange = (e) => {
        const actualBool = e.target.value === 'false'
            ? false
            : true
        this.setState({ laces: actualBool })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const newShoe = {
            name: this.state.name,
            brand: this.state.brand,
            url: this.state.url,
            // typeiD with our type ??
            typeId: this.state.type,
            laces: this.state.laces,
        }
        // const dbShoe = await request.post('https://rocky-basin-80195.herokuapp.com/api/shoes', newShoe);
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="shoe-form">
                <form onSubmit={this.handleSubmit}>
                    Make A New Shoe
                    <br />
                    <label>
                        Name:
                        <input onChange={this.handleNameChange} />
                    </label>
                    <br />
                    <label>
                        Brand:
                        <input onChange={this.handleBrandChange} />
                    </label>
                    <br />
                    <label>
                        Image:
                        <input onChange={this.handleImageChange} />
                    </label>
                    <br />
                    <label>
                        Type:
                        <select onChange={this.handleTypeChange}>
                            {this.state.types.map(type => <option value={type.id}>
                                {type.type}
                            </option>)}
                        </select>
                    </label>
                    <br />
                    <label>
                        Has Laces:
                        <select onChange={this.handleLacesChange}>
                            <option value="true" >True</option>
                            <option value="false" >False</option>
                        </select>
                    </label>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}