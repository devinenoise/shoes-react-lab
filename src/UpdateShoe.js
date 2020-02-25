import React, { Component } from 'react'
import request from 'superagent';




export default class UpdateShoe extends Component {
    state = {
        types: [],

    };

    componentDidMount = async () => {
        const types = await request.get(`https://rocky-basin-80195.herokuapp.com/api/types`);
        this.setState({ types: types.body });


        const shoe = await request.get(`https://rocky-basin-80195.herokuapp.com/api/shoes/${this.props.match.params.shoeId}`);

        console.log(shoe.body);
        const shoeToUpdate = shoe.body[0];

        this.setState({
            name: shoeToUpdate.name,
            brand: shoeToUpdate.brand,
            typeId: shoeToUpdate.type_id,
            url: shoeToUpdate.url,
            laces: shoeToUpdate.laces,
        });
    }



    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }
    handleBrandChange = (e) => {
        console.log(e.target.value)
        this.setState({ brand: (e.target.value) })
    }
    handleImageChange = (e) => {
        this.setState({ url: e.target.value })
    }
    handleTypeChange = (e) => {
        this.setState({ typeId: e.target.value })
        console.log(e.target.value);
    }
    handleLacesChange = (e) => {
        const actualBool = e.target.value === 'false'
            ? false
            : true
        this.setState({ laces: actualBool })
    }


    handleDelete = async () => {
        await request.delete(`https://rocky-basin-80195.herokuapp.com/api/shoes/${this.props.match.params.shoeId}`);
        this.props.history.push('/');
    }



    handleUpdate = async (e) => {
        e.preventDefault();
        const updateShoe = {
            name: this.state.name,
            brand: this.state.brand,
            url: this.state.url,
            typeId: Number(this.state.typeId),
            laces: this.state.laces,
            id: Number(this.props.match.params.shoeId)
        }
        console.log(this.state.type);
        const dbShoe = await request.put('https://rocky-basin-80195.herokuapp.com/api/shoes', updateShoe);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="update">
                <div className="shoe-form">
                    <form onSubmit={this.handleUpdate}>
                        Update Your Shoe
                    <br />
                        <label>
                            Name:
                        <input onChange={this.handleNameChange} value={this.state.name} />
                        </label>
                        <br />
                        <label>
                            Brand:
                        <input onChange={this.handleBrandChange} value={this.state.brand} />
                        </label>
                        <br />
                        <label>
                            Image:
                        <input onChange={this.handleImageChange} value={this.state.url} />
                        </label>
                        <br />
                        <label>
                            Type:
                        <select onChange={this.handleTypeChange} >
                                {
                                    this.state.types.map(type =>
                                        <option value={type.id}>
                                            {type.name}
                                        </option>)}
                            </select>
                        </label>
                        <br />
                        <label>
                            Has Laces:
                        <select onChange={this.handleLacesChange}>
                                <option value="true" >Yes</option>
                                <option value="false" >No</option>
                            </select>
                        </label>
                        <br />
                        <button>Update</button>
                    </form>

                    <button className="delete" onClick={this.handleDelete}
                    >DELETE</button>
                </div>
            </div>
        )
    }
}