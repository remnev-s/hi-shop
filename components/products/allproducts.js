import { productsData } from '../../components/utils/productsData';
import { HedingProducts } from '../blocksPage/hedingProducts/hedingProducts';
import { Card } from '../card/card';
import styles from './allproducts.module.scss';
import Image from 'next/image';

import clsx from 'clsx';
import block from 'module-clsx';
const style = block(styles);

const oneProducts = productsData.filter((item) => item.tag !== 'Bundles');
const bundle = productsData.filter((item) => item.tag === 'Bundles');

export const AllProducts = ({ title, sectionDistance, sortProducts }) => {
  const classSectionDistance = clsx({ section_distance: sectionDistance });
  const classSortProducts = clsx({ sort_products: sortProducts });

  return (
    <section
      className={`${styles.products} ${style(classSectionDistance)} wrapper`}
    >
      <HedingProducts description="Products" />
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
      <HedingProducts description="Bundle" />
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
