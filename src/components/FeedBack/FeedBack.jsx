import PropTypes from 'prop-types';
import css from './FeedBack.module.css';

export const FeedBack = ({ options, onLeaveFeedback }) => {
    return (
      <>
        {options.map(option => (
          <button
            key={option}
            className={css.button}
            type="button"
            name={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </>
    );
  };
  
  FeedBack.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };