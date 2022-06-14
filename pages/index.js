import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import Image from 'next/image';
import block1 from '../public/images/block-1.jpg';
import block2 from '../public/images/block-2.jpg';

import { Buttons } from '../components/UI/buttons/buttons';
import { HeaderContent } from '../components/blocksPage/headerContent/headerContent';
import { AboutContent } from '../components/blocksPage/aboutContent/aboutContent';
import { Products } from '../components/products/products';

export default function Home() {
  return (
    <>
      <HeaderContent />

      <AboutContent
        img={block1}
        title="We made our tech accessories like we like our coffee — strong and charged."
        subtitle="You’ll be powered with more energy and avoid the midday crash."
      />

      <Products />

      <AboutContent
        img={block2}
        layout={true}
        title="Our most visible life hack is to blend in, while standing out."
        subtitle="“Luxury is having the best quality for practically nothing.”"
      />
    </>
  );
}
