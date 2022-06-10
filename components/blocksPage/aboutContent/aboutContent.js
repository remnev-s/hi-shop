import { Buttons } from '../../UI/buttons/buttons';
import Image from 'next/image';
import block from '../../../public/images/block-1.jpg';
import styles from './aboutContent.module.scss';

export const AboutContent = () => {
  return (
    <section className={`${styles.about_content}`}>
      <div className={`${styles.inner} wrapper`}>
        <Image src={block} alt="image" />
        <div className={`${styles.text}`}>
          <h1 className={`${styles.title}`}>
            We made our tech accessories like we like our coffee — strong and
            charged.
          </h1>
          <div className={`${styles.subtitle}`}>
            <p>
              You’ll be powered with more energy and avoid the midday crash.
            </p>
          </div>
          <Buttons text="Shop now" />
        </div>
      </div>
    </section>
  );
};
