import {
  Link, Outlet, useNavigate, useParams,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { useGetIndividualJokeByIdQuery } from '../services/jokes';

const Joke = () => {
  const { id } = useParams<'id'>();
  const { data: IndividualJoke } = useGetIndividualJokeByIdQuery(id as string);

  return (
    <div>
      <div className="back-button">
        <Link to={`/categories/${IndividualJoke?.category}`} className="nav-text">
          {' '}
          <FontAwesomeIcon
            icon={faLongArrowAltLeft}
          />
        &nbsp;Back
        </Link>
      </div>
      <div className="jokes">
        <div className="joke-container">
          <div className="joke-wrapper">
            <p className="joke-text-individual">
              {`${IndividualJoke?.joke} ---
              JokeID:
              ${IndividualJoke?.id} ---
              Category:${IndividualJoke?.category}`}

            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Joke;
