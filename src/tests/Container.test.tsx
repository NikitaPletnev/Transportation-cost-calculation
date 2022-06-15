import renderer from 'react-test-renderer';
import React from "react";
import Container from "../components/Container";

it('snapshot test for Container element', () => {
    const tree = renderer
        .create(<Container/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
