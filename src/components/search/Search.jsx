import React, { useRef } from 'react';
import "./Search.css"
import search_icon from '../../assets/search-icon.png';

const Search = () => {
  const searchBoxRef = useRef(null);

    const handleSearchclick=()=>{
      searchBoxRef.current.focus();
    };

  return (
    <div className='search'>
        <input id='pokemon-name-search' type="text"  placeholder='Search...' ref={searchBoxRef}/>
        <button className="search-button" onClick={handleSearchclick}>
           <img src={search_icon} alt="" />
        </button>
    </div>
  )
}

export default Search