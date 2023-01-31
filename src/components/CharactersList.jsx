import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Character from './card/Character'
import NavPage from './NavPage'


const CharactersList = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const getApi = async () => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
        setCharacters(response.data.results);
        setLoading(false);
        console.log(response.data.results);
    };

    useEffect(() => {
        getApi()
    }, [page]);

    if (loading) {
      return (
        <div className='flex items-center justify-center h-screen'>loading...</div>
      )
    }

    return (
      <div>
        <h1 className='text-green-500 text-4xl font-bold text-center mt-10'>Rick and Morty</h1>
        <NavPage ActualPage={page} setPage={setPage} />
        <div className="flex flex-wrap justify-center">
              {characters.map((character) => (
                <div className="" key={character.id}>
                  <Character
                    key={character.id}
                    name={character.name}
                    origin={character.origin}
                    image={character.image}
                    species={character.species}
                  />
                </div>
              ))}
        </div>
        <NavPage ActualPage={page} setPage={setPage} />
      </div>
      );
    }

export default CharactersList
