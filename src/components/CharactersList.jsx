import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Character from './card/Character'
import NavPage from './NavPage'
import InfiniteScroll from 'react-infinite-scroll-component'


const CharactersList = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [apiInfo, setApiInfo] = useState({count: 1, pages: 1, next: '', prev: ''});

    const getApi = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
      setCharacters([...characters, ...response.data.results]);
      console.log('>>: characters > ', characters)
      setLoading(false);
      setApiInfo(response.data.info)
      console.log(response.data.results);
    };

    useEffect(() => {
      getApi()
    }, [page]);

    const handlePageAndData = () => {
      if(page+1 <= apiInfo.pages)
        setPage(page+1);
    }

    return (
      <div>
        <h1 className='text-green-500 text-4xl font-bold text-center mt-10'>Rick and Morty</h1>
        <InfiniteScroll
          dataLength={characters.length}
          next={handlePageAndData}
          hasMore={page < (apiInfo.pages+1)}
          loader={<h4>Loading...</h4>}
        >
          <div className="flex flex-wrap justify-center">
            {characters.map((character) => (
              <div className="" key={character.id.toString()}>
                <Character
                  key={character.id.toString()}
                  name={character.name}
                  origin={character.origin}
                  image={character.image}
                  species={character.species}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
      );
    }

export default CharactersList
