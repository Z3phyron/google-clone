import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { SearchBtn, SearchCont, SearchInput } from "../../assets/style/styled";
import mic from "../../assets/images/g-mic.png";
import { Link } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");

  const luckyFeeling = (e) => {
    e.preventDefault();
    window.location.href = "https://perfects.engineering";
  };
  const search = (e) => {
    e.preventDefault();
    window.location.href = "https://google.com/search?q=" + input;
    // alert(`https://google.com/search?q=${input}`)
  };
  return (
    <SearchCont onSubmit={search}>
      <SearchInput>
        <BiSearch className="search_icon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <img src={mic} alt="" />
      </SearchInput>
      <SearchBtn>
        <button onClick={search}>Googl Search</button>
        <button onClick={luckyFeeling}>I'm feeling lucky</button>
      </SearchBtn>
    </SearchCont>
  );
};

export default Search;
