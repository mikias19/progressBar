import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import "./search.css";
const SearchInput = () => {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <div className={`search ${expand && "active"} `}>
      <input type="text" placeholder="Search..." className="input" />
      <button onClick={handleExpand} className="btn">
        <i className="icon">
          <FaSearch />
        </i>
      </button>
    </div>
  );
};

export default SearchInput;
