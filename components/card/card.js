import styles from './card.module.scss';
export const Card = ({ title, price, sale, priceSale }) => {
  return (
    <div className={`${styles.card}`}>
      <span className={`${styles.sale}`}> {sale} </span>
      <div className={`${styles.description}`}>
        <p className={`${styles.title}`}> {title} </p>
        <p className={`${styles.price}`}> ${price} </p>
      </div>
      <p className={`${styles.price_sale}`}> {priceSale} </p>
      <button className={`${styles.card_button}`}> add </button>
    </div>
  );
};
