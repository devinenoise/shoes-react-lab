import React from "react";
import ShoeItem from "./ShoeItem.js";
import renderer from "react-test-renderer";
import { Link } from "react-router-dom";


test('renders ShoeItem.js correctly', () => {
    const tree = renderer
        .create(<ShoeItem data={[]} /> <Link ></Link>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});