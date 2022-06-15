import { Buttons } from '../../UI/buttons/buttons';
import Image from 'next/image';
import Link from 'next/link';
import styles from './readContent.module.scss';

import readMore from '../../../public/images/read-more.png';

export const ReadMore = () => {
  return (
    <section className={`${styles.read_more}`}>
      <div className={`${styles.inner}  wrapper`}>
        <Image className={`${styles.img}`} src={readMore} alt="img" />
        <Link href="/about" passHref>
          <Buttons text="Read more" />
        </Link>
      </div>
    </section>
  );
};
