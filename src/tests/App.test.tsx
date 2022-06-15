import renderer from 'react-test-renderer';
import React from "react";
import App from "../components/App";

it('snapshot test for App element', () => {
    const tree = renderer
        .create(<App/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
