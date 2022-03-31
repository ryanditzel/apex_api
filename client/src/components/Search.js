import React from 'react'

const Search = (props) => {

    return(
    <div className='search-bar'>
        <div class="cntr">
            <div className='cntr-innr'>
            <label className="search" for="inpt_search">
                <input id="inpt_search" type="text" name='search' value={props.value} placeholder='' onChange={props.onChange}/>
            </label>
            <p>
            <button onClick={props.onSubmit}>Submit</button>
            </p>
            </div>
        </div>
     </div>
    )
}

export default Search