import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import styles from './header.module.scss';

export const Header = ({ count }) => {
  const [activeState, setActiveState] = useState(false);

  function handelMenu() {
    !activeState ? setActiveState(true) : setActiveState(false);
  }
  return (
    <>
      <header className={`${styles.header}`}>
        <div className={`${styles.content} wrapper`}>
          <ul className={`${styles.nav} `}>
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

          <ul className={`${styles.nav} ${styles.user} `}>
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
            <a className={`${styles.logo} ${styles.active} `}>
              <Image src={logo} alt="logo" />
            </a>
          </Link>
        </div>

        <div className={`${styles.burger}`} onClick={handelMenu}>
          <span></span>
        </div>
      </header>
    </>
  );
};
