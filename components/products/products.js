import { productsData } from '../../components/utils/productsData';
import { Card } from '../card/card';
import styles from './products.module.scss';
import Image from 'next/image';

const oneProducts = productsData.filter((item) => item.tag === 'oneProduct');
const bundle = productsData.filter((item) => item.tag === 'bundle');

export const Products = ({ title }) => {
  return (
    <section className={`${styles.products} wrapper`}>
      <h2 className={`${styles.descriptions}`}> Products </h2>
      <ul className={`${styles.list}`}>
        {oneProducts.map((item) => (
          <li className={`${styles.item}`} key={item.id}>
            <div className={`${styles.img}`}>
              <Image
                src={item.img}
                layout="responsive"
                objectFit="contain"
                alt="product"
              />
            </div>
            <Card title={item.title} price={item.price} />
          </li>
        ))}
      </ul>
      <h2 className={`${styles.descriptions}`}> Bundle </h2>
      <ul className={`${styles.list}`}>
        {bundle.map((item) => (
          <li className={`${styles.item}`} key={item.id}>
            <div className={`${styles.img}`}>
              <Image
                src={item.img}
                layout="responsive"
                objectFit="contain"
                alt="product"
              />
            </div>
            <Card
              oldPrice={true}
              title={item.title}
              price={item.price}
              sale={item.sale}
              priceSale={item.priceSale}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
