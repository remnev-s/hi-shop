import React, { useState } from 'react';
import App from 'next/app';
import { AllProducts } from '../components/products/allproducts';

import { HedingProducts } from '../components/blocksPage/hedingProducts/hedingProducts';

import { productsData } from '../components/utils/productsData';
import { Card } from '../components/card/card';
import Image from 'next/image';

import styles from '../styles/products.module.scss';

const Products = () => {
  const [filter, setFilter] = useState('All');
  function onchange(v) {
    setFilter(v);
  }
  return (
    <>
      <section className={`${styles.products} wrapper`}>
        <HedingProducts description="Products" />

        <div className={`${styles.sort} `}>
          <button
            className={`${styles.sort_list}`}
            onClick={(e) => onchange(e.target.value)}
            value="All"
          >
            All
          </button>
          <button
            className={`${styles.sort_list}`}
            onClick={(e) => onchange(e.target.value)}
            value="Accessories"
          >
            Accessories
          </button>
          <button
            className={`${styles.sort_list}`}
            onClick={(e) => onchange(e.target.value)}
            value="Adapters"
          >
            Adapters
          </button>
          <button
            className={`${styles.sort_list}`}
            onClick={(e) => onchange(e.target.value)}
            value="Bundles"
          >
            Bundles
          </button>
          <button
            className={`${styles.sort_list}`}
            onClick={(e) => onchange(e.target.value)}
            value="Cables"
          >
            Cables
          </button>
          <button
            className={`${styles.sort_list}`}
            onClick={(e) => onchange(e.target.value)}
            value="Chargers"
          >
            Chargers
          </button>
        </div>

        <ul className={`${styles.list}`}>
          {productsData.map((item) => {
            if (filter === 'All') {
              return (
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
              );
            } else if (filter === item.tag) {
              return (
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
              );
            }
          })}
        </ul>
      </section>
    </>
  );
};

export default Products;
