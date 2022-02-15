import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';

//for jest test need this following lines
import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

//for snapshot testing need the following lines
import renderer from "react-test-renderer"

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
})

it("render button correctly",()=>{
    var textContent = "click me"
    const {getByTestId}= render(<Button label={textContent}/>); //here check the button availability with its ID
    expect(getByTestId("buttonID")).toHaveTextContent(textContent);
})

it("render button correctly",()=>{
    var testContent = "save"
    const {getByTestId}= render(<Button label={testContent}/>);
    expect(getByTestId("buttonID")).toHaveTextContent(testContent);
})

it ("match snapshot 1",()=>{
    const tree =  renderer.create(<Button label="save me 1"></Button>).toJSON();
    // using renderer to create snaphot for a Dom.
    // "<Button label="save"></Button>" this is a dom. after it created then convert it to json data.
    // And save it to an object called tree

    expect(tree).toMatchSnapshot()

}) 


it ("match snapshot 2",()=>{
    const tree =  renderer.create(<Button label="save me 2"></Button>).toJSON();
    expect(tree).toMatchSnapshot()

}) 