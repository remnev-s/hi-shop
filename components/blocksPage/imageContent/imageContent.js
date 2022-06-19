import styles from './imageContent.module.scss';
import Image from 'next/image';

export const ImageContent = ({ img, heading, title, subtitle }) => {
  return (
    <section className={`${styles['image-block']}`}>
      <Image src={img} layout="responsive" alt="picture device" rel="preload" />
      <div className={`${styles.content}`}>
        <h1>{heading}</h1>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};
