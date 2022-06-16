import { Buttons } from '../../UI/buttons/buttons';
import styles from './headerContent.module.scss';
import Link from 'next/link';

import clsx from 'clsx';
import block from 'module-clsx';
const style = block(styles);

export const HeaderContent = ({ title, children, wideTitle, wideSubTitle }) => {
  const classWideTitle = clsx({ wide_title: wideTitle });
  return (
    <div className={`${styles.promo}`}>
      <div className={`${styles.inner} wrapper`}>
        <h1 className={`${styles.title} ${style(classWideTitle)}`}>{title}</h1>
        <div className={`${styles.subtitle} `}>{children}</div>
        <Link href="/products" passHref>
          <Buttons text="View products" />
        </Link>
      </div>
    </div>
  );
};
