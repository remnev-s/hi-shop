import { Buttons } from '../../UI/buttons/buttons';
import styles from './headerContent.module.scss';
import Link from 'next/link';

import clsx from 'clsx';
import block from 'module-clsx';
const style = block(styles);

export const HeaderContent = ({ title, children, wideTitle, hideBtn }) => {
  const classWideTitle = clsx({ wide_title: wideTitle });
  const classHide = clsx({ hide_btn: hideBtn });
  return (
    <div className={`${styles.promo}`}>
      <div className={`${styles.inner} wrapper`}>
        <h1 className={`${styles.title} ${style(classWideTitle)}`}>{title}</h1>
        <div className={`${styles.subtitle} `}>{children}</div>
        <Link href="/products" passHref className={` ${style(classHide)}`}>
          <Buttons className={` ${style(classHide)}`} text="View products" />
        </Link>
      </div>
    </div>
  );
};
