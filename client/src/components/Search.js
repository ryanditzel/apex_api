import React from 'react'

const Search = (props) => {

    return(
    <div className='search-bar'>
        {/* <input id='inpt_search' type='text' name='search' value={props.value} placeholder='Search...' onChange={props.onChange}> 
        </input>
        <button onClick={props.onSubmit}>Submit</button> */}

        <div class="cntr">
            <div className='cntr-innr'>
            <label className="search" for="inpt_search">
                    <input id="inpt_search" type="text" name='search' value={props.value} placeholder='' onChange={props.onChange}/>
            </label>
                <p>Hover to see the magic.</p>
            </div>
        </div>


     </div>
    )
}

export default Search