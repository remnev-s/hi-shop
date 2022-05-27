import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import styles from './header.module.scss';

export const Header = ({ count }) => {
  return (
    <>
      <header className={`${styles.header}`}>
        <div className={`${styles.content}  wrapper`}>
          <ul
            className={`${styles.nav} ${styles.menu_hidden} ${styles.active}`}
          >
            <li className={`${styles.list} ${styles.nav__list}`}>
              <Link href='/products'>
                <a className={`${styles.link}`}>Products</a>
              </Link>
            </li>
            <li className={`${styles.list} ${styles.nav__list}`}>
              <Link href='/journal'>
                <a className={`${styles.link}`}>Journal</a>
              </Link>
            </li>
            <li className={`${styles.list} ${styles.nav__list}`}>
              <Link href='/about'>
                <a className={`${styles.link}`}>About</a>
              </Link>
            </li>
          </ul>
          <div
            className={`${styles.burger}`}
            onClick={() => console.log('burger')}
          >
            <span></span>
          </div>

          <Link href='/'>
            <a className={`${styles.logo} ${styles.active} `}>
              <Image src={logo} alt='logo' />
            </a>
          </Link>

          <ul className={`${styles.nav} ${styles.user} ${styles.active}`}>
            <li className={`${styles.list} {styles.nav__list}`}>
              <Link
                className={`${styles.link} ${styles.login}`}
                login
                href='/login'
              >
                <a className={`${styles.link} ${styles.login}`}>Login</a>
              </Link>
            </li>
            <li className={`${styles.list} ${styles.nav__list}`}>
              <Link href='/cart'>
                <a className={`${styles.link} ${styles.cart}`}>
                  Cart <span> ({count}) </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
