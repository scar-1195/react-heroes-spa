import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharactersByHero = ({ alterEgo, characters }) => {
  return (alterEgo === characters) 
    ? <></> 
    : <p>{characters}</p>;
}

export const HeroCard = ({
  id,
  superhero,
  alterEgo,
  firstAppearance,
  characters,
}) => {
  
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className='col animate__animated animate__fadeIn'>
      
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img src={heroImageUrl} className='card-img' alt={superhero} />
          </div>

          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{superhero}</h5>
              <p className='card-text'>{alterEgo}</p>

              <CharactersByHero characters={characters} alterEgo={alterEgo} />

              <p className='card-text'>
                <small className='text-muted'>{firstAppearance}</small>
              </p>

              <Link to={`/hero/${id}`}>Más..</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

CharactersByHero.propTypes = {
  alterEgo: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
};

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  alterEgo: PropTypes.string.isRequired,
  firstAppearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
};
