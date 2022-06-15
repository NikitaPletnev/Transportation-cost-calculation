import renderer from 'react-test-renderer';
import React from "react";
import Loader from "../components/Loader";

it('snapshot test for Loader element', () => {
    const tree = renderer
        .create(<Loader/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
