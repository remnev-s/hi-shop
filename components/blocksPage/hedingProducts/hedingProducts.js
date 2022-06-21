import styles from './hedingProducts.module.scss';

export const HedingProducts = ({ description, children }) => {
  return (
    <div className={`${styles.heading}`}>
      <h2 className={`${styles.description}`}> {description} </h2>
      {children}
    </div>
  );
};
