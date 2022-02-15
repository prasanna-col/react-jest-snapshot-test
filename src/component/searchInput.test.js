import { render, fireEvent } from '@testing-library/react';

import SearchInput from './searchInput';

it("Check the input feild is avaible", () => {
    const { queryByTitle } = render(<SearchInput />)
    const txtInput = queryByTitle("searchTitle")
    expect(txtInput).toBeTruthy()
    console.log("onChangeText====ok")
})

describe("describe the input function", () => {
    it("onChangeText", () => {
        const { queryByTitle } = render(<SearchInput />)
        const txtInput = queryByTitle("searchTitle")
        fireEvent.change(txtInput, { target: { value: "Lets code" } })
        expect(txtInput.value).toBe("Lets code");
    })
})