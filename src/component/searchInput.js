import React, { useState } from 'react';

function SearchInput() {

    const [searchVal, setSearchVal] = useState("");

    const onInputData = (event) => {
        setSearchVal(event.target.value)
        
        console.log("searchVal==>", event.target.value)
    }
    return (
        <div>
            <input type='text' onChange={ onInputData} title='searchTitle' />
            <h6>{searchVal}</h6>
        </div>

    )
}
export default SearchInput