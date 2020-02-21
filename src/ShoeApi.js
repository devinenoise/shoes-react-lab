import request from "superagent";

export const GetShoes = (shoeId) => request.get(`https://rocky-basin-80195.herokuapp.com/api/shoes${shoeId}`)