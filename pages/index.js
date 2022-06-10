import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import { HeaderContent } from '../components/blocksPage/headerContent/headerContent';
import { AboutContent } from '../components/blocksPage/aboutContent/aboutContent';
import { Products } from '../components/products/products';

export default function Home() {
  return (
    <>
      <HeaderContent />

      <AboutContent />
      <Products />
    </>
  );
}
