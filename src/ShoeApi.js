import request from "superagent";

export const GetShoes = () => request.get(`https://rocky-basin-80195.herokuapp.com/api/shoes/`)

export const getShoe = (shoeId) => request.get(`https://rocky-basin-80195.herokuapp.com/api/shoes/${shoeId}`)