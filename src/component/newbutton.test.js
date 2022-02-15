import { render, cleanup, fireEvent } from "@testing-library/react"; // for DOM checking pu

import Newbutton from './newbutton';

it("Check the button is availabilty with title", () => { // this name to be use definded
    const { queryByTitle } = render(<Newbutton />) // here to check the button avail using title name
    const btn = queryByTitle("searchBtn")
    expect(btn).toBeTruthy()
})

describe("Check the button operation", () => {
    it("onclick", () => {
        const { queryByTitle } = render(<Newbutton />) // here to check the button avail using title name
        const btn = queryByTitle("searchBtn")
        expect(btn.innerHTML).toBe("Click me")
        fireEvent.click(btn);
        expect(btn.innerHTML).toBe("clicked")
    })
})
