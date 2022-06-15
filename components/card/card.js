import styles from './card.module.scss';
import clsx from 'clsx';
import block from 'module-clsx';
const style = block(styles);

export const Card = ({ title, price, sale, priceSale, oldPrice }) => {
  const classPrice = clsx({ old_price: oldPrice });
  return (
    <div className={`${styles.card} `}>
      <span className={`${styles.sale}`}> {sale} </span>
      <div className={`${styles.description}`}>
        <p className={`${styles.title}`}> {title} </p>
        <p className={`${styles.price} ${style(classPrice)}`}> ${price} </p>
      </div>

      <p className={`${styles.price_sale}`}> {priceSale} </p>

      <button className={`${styles.card_button}`}> add </button>
    </div>
  );
};
