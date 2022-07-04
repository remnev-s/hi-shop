import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import styles from './header.module.scss';

export const Header = ({ count }) => {
  const [visible, setVisible] = useState(false);

  return (
    <header className={`${styles.header}`}>
      <div className={visible ? styles.open : styles.content} wrapper="true">
        <ul className={`${styles.nav} `} onClick={() => setVisible(!visible)}>
          <li className={`${styles.list}`}>
            <Link href="/products">
              <a className={`${styles.link}`}>Products</a>
            </Link>
          </li>
          <li className={`${styles.list} `}>
            <Link href="/journal">
              <a className={`${styles.link}`}>Journal</a>
            </Link>
          </li>
          <li className={`${styles.list} `}>
            <Link href="/about">
              <a className={`${styles.link}`}>About</a>
            </Link>
          </li>
        </ul>

        <ul
          className={`${styles.nav} ${styles.user} `}
          onClick={() => setVisible(!visible)}
        >
          <li className={`${styles.list}`}>
            <Link href="/login">
              <a className={`${styles.link} `}>Login</a>
            </Link>
          </li>
          <li className={`${styles.list}`}>
            <Link href="/cart">
              <a className={`${styles.link} ${styles.cart}`}>
                Cart <span> ({count}) </span>
              </a>
            </Link>
          </li>
        </ul>

        <Link href="/">
          <a
            className={`${styles.logo} ${styles.active} `}
            onClick={() => setVisible(!visible)}
          >
            <Image src={logo} alt="logo" />
          </a>
        </Link>
      </div>

      <div
        className={visible ? styles.menu_active : styles.burger}
        onClick={() => setVisible(!visible)}
      ></div>
    </header>
  );
};
