import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './styles.css';

const Character = (character) => {
  return (
      <div className="card w-80 bg-base-100 shadow-2xl mx-10 my-5 card-contain">
        <div className='lazy-load-container'>
          <LazyLoadImage
            alt={character.name}
            effect="blur"
            height={'100%'}
            width={'100%'}
            src={character.image} // use normal <img> attributes as props
          />
        </div>
        <div className="card-body items-center">
          <h2 className="card-title text-center">{character.name}</h2>
          <ul className="block text-left">
            <li>Origen: {character.origin.name } </li>
            <li>Especie: {character.species } </li>
          </ul>
        </div>
      </div>
  );
}

export default Character


