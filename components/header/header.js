import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import styles from './header.module.scss';

export const Header = ({ count }) => {
  const [visible, setVisible] = useState(false);

  function handelMenu() {
    !visible ? setVisible(true) : setVisible(false);
  }
  return (
    <>
      <header>
        <nav
          className={`${styles.main_nav} ${
            visible ? styles.nav__open : null
          } wrapper`}
        >
          <ul onClick={() => setVisible(false)} className={styles.nav}>
            <Link href="/products">
              <li className={`${styles.list}`}>Products</li>
            </Link>
            <Link href="/journal">
              <li className={`${styles.list} `}>Journal</li>
            </Link>
            <Link href="/about">
              <li className={`${styles.list} `}>About</li>
            </Link>
          </ul>

          <ul onClick={() => setVisible(false)} className={styles.nav}>
            <Link href="/login">
              <li className={`${styles.list}`}>Login</li>
            </Link>
            <Link href="/cart">
              <li className={`${styles.list}`}>
                Cart <span> ({count}) </span>
              </li>
            </Link>
          </ul>
        </nav>

        <Link href="/">
          <a className={`${styles.logo}`} onClick={() => setVisible(false)}>
            <Image src={logo} alt="logo" />
          </a>
        </Link>

        <div className={`${styles.burger}`} onClick={handelMenu}>
          menu
        </div>
      </header>
    </>
  );
};
