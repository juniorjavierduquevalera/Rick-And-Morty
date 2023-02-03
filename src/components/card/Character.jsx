import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './styles.css'

const Character = (character) => {
  return (
      <div className="card w-80 bg-base-100 shadow-2xl mx-10 my-5 card-contain">
        <LazyLoadImage
          alt={character.name}
          effect="blur"
          // height={image.height}
          src={character.image} // use normal <img> attributes as props
          // width={image.width}
        />
          {/* <figure className="px-10 pt-10">
            <img src={character.image} alt={character.name} className="rounded-md" />
          </figure> */}
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


