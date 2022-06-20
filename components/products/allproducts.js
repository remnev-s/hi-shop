import { productsData } from '../../components/utils/productsData';
import { Card } from '../card/card';
import styles from './allproducts.module.scss';
import Image from 'next/image';

import clsx from 'clsx';
import block from 'module-clsx';
const style = block(styles);

const oneProducts = productsData.filter((item) => item.tag !== 'bundle');
const bundle = productsData.filter((item) => item.tag === 'bundle');

export const AllProducts = ({ title, sectionDistance, sortProducts }) => {
  const classSectionDistance = clsx({ section_distance: sectionDistance });
  const classSortProducts = clsx({ sort_products: sortProducts });
  return (
    <section
      className={`${styles.products} ${style(classSectionDistance)} wrapper`}
    >
      <div className={`${styles.headings}`}>
        <h2 className={`${styles.descriptions}`}> Products </h2>

        <ul className={`${styles.sort} ${style(classSortProducts)}`}>
          <li className={`${styles.sort_list}`}> All </li>
          <li className={`${styles.sort_list}`}> Accessories </li>
          <li className={`${styles.sort_list}`}> Adapters </li>
          <li className={`${styles.sort_list}`}> Bundles </li>
          <li className={`${styles.sort_list}`}> Cables </li>
          <li className={`${styles.sort_list}`}> Chargers </li>
        </ul>
      </div>
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
