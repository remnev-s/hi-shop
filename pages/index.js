import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import Image from 'next/image';
import block1 from '../public/images/block-1.jpg';
import block2 from '../public/images/block-2.jpg';

import Link from 'next/link';
import { Buttons } from '../components/UI/buttons/buttons';

import { HeaderContent } from '../components/blocksPage/headerContent/headerContent';
import { AboutContent } from '../components/blocksPage/aboutContent/aboutContent';
import { AllProducts } from '../components/products/allproducts';
import { ReadMore } from '../components/blocksPage/readContent/readContent';

export default function Home() {
  return (
    <>
      <HeaderContent title="We understand tech accessories">
        <p>No distracting logos.</p>
        <p>Transparent pricing.</p>
        <p>High quality and easy returns if we didn’t get it right.</p>
        <p>We also decided, warranties should be included.</p>
      </HeaderContent>

      <AboutContent
        img={block1}
        title="We made our tech accessories like we like our coffee — strong and charged."
        subtitle="You’ll be powered with more energy and avoid the midday crash."
      >
        <Link href="/products" passHref>
          <Buttons text="Shop Now" />
        </Link>
      </AboutContent>

      <AllProducts sortProducts={true} />

      <AboutContent
        img={block2}
        layout={true}
        title="Our most visible life hack is to blend in, while standing out."
        subtitle="“Luxury is having the best quality for practically nothing.”"
      >
        <Link href="/products" passHref>
          <Buttons text="Shop Here" />
        </Link>
      </AboutContent>
      <ReadMore />
    </>
  );
}
