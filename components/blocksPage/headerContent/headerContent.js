import { Buttons } from '../../UI/buttons/buttons';
import styles from './headerContent.module.scss';
import Link from 'next/link';
export const HeaderContent = () => {
  return (
    <div className={`${styles.promo}`}>
      <div className={`${styles.inner} wrapper`}>
        <h1 className={`${styles.title}`}>We understand tech accessories</h1>
        <div className={`${styles.subtitle}`}>
          <p>No distracting logos.</p>
          <p>Transparent pricing.</p>
          <p>High quality and easy returns if we didn’t get it right.</p>
          <p>We also decided, warranties should be included.</p>
        </div>
        <Link href="/products" passHref>
          <Buttons text="View products" />
        </Link>
      </div>
    </div>
  );
};
