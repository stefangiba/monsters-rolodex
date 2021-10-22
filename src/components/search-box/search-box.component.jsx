import React from "react";
import "./search-box.styles.css";
import PropTypes from "prop-types";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
};

export default SearchBox;
