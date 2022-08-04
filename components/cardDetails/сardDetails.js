import styles from './CardDetails.module.css';
import PropTypes from 'prop-types';

export function CardDetails({ card }) {
  return (
    <>
      <div className={styles.popup_inner}>
        <h2>{card.title}</h2>
        <p>{card.subtitle}</p>
        <button> Just button yop numbe 1 </button>
        <button> Just button yop </button>
      </div>
    </>
  );
}
