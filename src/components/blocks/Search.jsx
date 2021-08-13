import React from "react";
import { BiSearch } from "react-icons/bi";
import { SearchBtn, SearchCont, SearchInput } from "../../assets/style/styled";
import mic from '../../assets/images/g-mic.png'


const Search = () => {
  return (
      <SearchCont>
          
          

      <SearchInput>
        <BiSearch className='search_icon'/>
        <input />
        <img src={mic} alt="" />
      </SearchInput>
      <SearchBtn>
        <button>Google Search</button>
        <button>I;m feeling lucky</button>
      </SearchBtn>
    </SearchCont>
  );
};

export default Search;
