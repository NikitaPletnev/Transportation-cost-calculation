import renderer from 'react-test-renderer';
import React from "react";
import FormParams from "../components/FormParams";
import {InputElementInterface} from "../components/interfaces/InputElementInterface";

it('snapshot test for FormParams element', () => {
    const testElements: InputElementInterface[] = [
        {inputClass: 'inputClassTest1', tooltipClass: 'tooltipClassTest1'},
        {inputClass: 'inputClassTest2', tooltipClass: 'tooltipClassTest2'},
    ]
    const tree = renderer
        .create(<FormParams title={'Test'} elements={testElements}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
