import { Buttons } from '../../UI/buttons/buttons';
import Image from 'next/image';
import Link from 'next/link';
import styles from './aboutContent.module.scss';
import clsx from 'clsx';
import block from 'module-clsx';
const style = block(styles);

export const AboutContent = ({ img, title, subtitle, layout, children }) => {
  const classLayout = clsx({ class_layout: layout });
  return (
    <section className={`${styles.about_content}`}>
      <div className={`${styles.inner}  wrapper`}>
        <Image
          src={img}
          layout="responsive"
          alt="picture device"
          rel="preload"
        />
        <div className={`${styles.text} ${style(classLayout)}`}>
          <h2 className={`${styles.title}`}>{title}</h2>
          <div className={`${styles.subtitle}`}>
            <p>{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};
