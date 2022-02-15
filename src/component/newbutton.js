import React, { useState } from 'react';

function Newbutton() {

    const [ btntxt, setBtntxt ] = useState("Click me")

    const onBtnClick = () => {
        setBtntxt("clicked")
    }
    return (
        <button onClick={onBtnClick} title="searchBtn">{btntxt}</button>
    )
}
export default Newbutton