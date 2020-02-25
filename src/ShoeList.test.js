import React from "react";
import ShoeList from "./ShoeList";
import renderer from "react-test-renderer";

test('renders ShoeList.js correctly', () => {
    const tree = renderer
        .create(<ShoeList />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});