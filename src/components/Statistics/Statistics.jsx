import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
  }) => {
    return (
      <>
        <ul className={css.item}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>
        <p className={css.total}>Total: {total}</p>
        <p className={css.total}>
          Positive feedback: {positivePercentage} %
        </p>
      </>
    );
  };
  
  Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };