import PropTypes from 'prop-types';

export const Rating = ({ rating, reviews, color }) => {
  return (
    <>
      <span
        style={{ color }}
        className={
          rating === 0.5
            ? 'fa fa-star-half-alt'
            : rating >= 1
            ? 'fa fa-star'
            : 'fa fa-star'
        }
      ></span>
      <span
        style={{ color }}
        className={
          rating === 1.5
            ? 'fa fa-star-half-alt'
            : rating >= 2
            ? 'fa fa-star'
            : 'fa fa-star'
        }
      ></span>
      <span
        style={{ color }}
        className={
          rating === 2.5
            ? 'fa fa-star-half-alt'
            : rating >= 3
            ? 'fa fa-star'
            : 'fa fa-star'
        }
      ></span>
      <span
        style={{ color }}
        className={
          rating === 3.5
            ? 'fa fa-star-half-alt'
            : rating >= 4
            ? 'fa fa-star'
            : 'fa fa-star'
        }
      ></span>
      <span
        style={{ color }}
        className={
          rating === 4.5
            ? 'fa fa-star-half-alt'
            : rating >= 5
            ? 'fa fa-star'
            : 'fa fa-star'
        }
      ></span>
      <span className="ml-2">
        <strong>{reviews}</strong>
      </span>
    </>
  );
};

Rating.defaultProps = {
  color: '#ffd400',
  rating: 0
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.string.isRequired,
  color: PropTypes.string,
};