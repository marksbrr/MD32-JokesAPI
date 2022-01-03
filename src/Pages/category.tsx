import { useParams, useNavigate, Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { useGetJokesByCategoryQuery } from '../services/jokes';

const Category = () => {
  const { id } = useParams<'id'>();
  const { data: joke } = useGetJokesByCategoryQuery(id || '')

  if (joke?.error) {
    return <h2>This category is empty</h2>;
  }

  return (
    <div>
      <div className="back-button">
        <Link to="/categories" className="nav-text">
          {' '}
          <FontAwesomeIcon
            icon={faLongArrowAltLeft}
          />
        &nbsp;Back
        </Link>
      </div>
      <div className="jokes">

        {joke?.jokes?.map((item, index) => (
          <div className="joke-container" key={item.id}>
            <div className="joke-container">
              <div className="joke-wrapper">
                <Link to={`/categories/${id}/${item.id}`} className="joke-text">
                  <p className="joke-text">
                    <span className="joke-index">
                      {index + 1}
                      .&nbsp;
                    </span>
                    {item.joke}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
