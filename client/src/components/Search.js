import React from 'react'

const Search = (props) => {

    return(
    <div className='search-bar'>
        <input id="inpt_search" type="text" name='search' value={props.value} placeholder='Search Legend Name...' onChange={props.onChange}/>
            <p>
                <div id="container">
                    <button className="learn-more" onClick={props.onSubmit}>
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span class="button-text">Submit</span>
                    </button>
                </div>
            </p>
    </div>
    )
}

export default Search