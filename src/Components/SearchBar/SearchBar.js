import React from 'react';
import './SearchBar.css';
import logo from './Rick_and_Morty_logo.png'

const SearchBar = (props) => {
    console.log(props.searchValue)
    return (
        <div className="search-bar">
            <div className="header">
                <img
                    className="logo-header"
                    src={logo}
                    alt="logo"
                />
            </div>
            <form>
                <div className="search-bar-wrapper">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                        value={props.searchValue}
                        className="search-input"
                        type="text"
                        placeholder="Filter by name..."
                        onChange={(e) => {props.searchInputHandler(e.target.value)}}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;