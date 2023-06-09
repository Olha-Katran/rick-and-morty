import React, { useState, useEffect}from 'react';
import SearchBar from "./Components/SearchBar/SearchBar";
import PersonList from "./Components/person-list/person-list";
import './mainComponent.css';
import Login from "./Components/Login/login";


const Main = () => {
    const [characters, setCharacters] = useState([]);
    const searchKey = "searchKey";

    useEffect(() => {
        async function fetchCharacters() {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');
                const data = await response.json();

                // Створюємо масив об'єктів персонажів
                const characters = data.results.map((character) => {
                    return {
                        id: character.id,
                        name: character.name,
                        image: character.image,
                        status: character.status,
                        species: character.species,
                        type: character.type,
                        gender: character.gender
                    };
                })
            ;

                setCharacters(characters.sort());
            } catch (error) {
                console.error(error);
            }
        }

        fetchCharacters();

        let savedSearch = localStorage.getItem(searchKey);
        console.log(savedSearch);
        if(savedSearch !== null ) {
            setSearchValue(savedSearch);
        }

    }, []);


    const [searchValue, setSearchValue] = useState("");

    const searchInputHandler = (value) => {
        setSearchValue(value);
        localStorage.setItem(searchKey, value)
    }

    return (
        <div className="main-container">
                <div className="login-component">
                    <Login/>
                </div>
                <SearchBar
                    searchInputHandler={searchInputHandler}
                    searchValue={searchValue}
                />
            <PersonList characters={characters.filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()))} />
        </div>
    )
}

export default Main;