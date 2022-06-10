import React from 'react';
import styles from './footer.module.scss';
import { Buttons } from '../UI/buttons/buttons';
import Image from 'next/image';
import logo from '../../public/logo.svg';

export const Footer = () => {
  return (
    <section className={`${styles.footer}`}>
      <div className={`${styles.content}   wrapper`}>
        <div className={`${styles.logo}`}>
          <Image src={logo} alt="logo" />
        </div>

        <ul className={`${styles.social}`}>
          <li className={`${styles.list}`}>
            <a href="#" className={`${styles.link}`}>
              Instagram
            </a>
          </li>
          <li className={`${styles.list}`}>
            <a href="#" className={`${styles.link}`}>
              Twitter
            </a>
          </li>
        </ul>

        <ul className={`${styles.police}`}>
          <li className={`${styles.list}`}>
            <a href="#" className={`${styles.link}`}>
              Shipping Policy
            </a>
          </li>
          <li className={`${styles.list}`}>
            <a href="#" className={`${styles.link}`}>
              Refund Policy
            </a>
          </li>
          <li className={`${styles.list}`}>
            <a href="#" className={`${styles.link}`}>
              Privacy Policy
            </a>
          </li>
          <li className={`${styles.list}`}>
            <a href="#" className={`${styles.link}`}>
              Terms of Service
            </a>
          </li>
        </ul>

        <form className={`${styles.subscribe}`}>
          <p className={`${styles.form_title}`}>
            Sign up for the latest news, offers and more.
          </p>
          <label className={`${styles.form_label}`} htmlFor="email">
            Email
          </label>
          <input
            className={`${styles.form_input}`}
            type="email"
            id="email"
            placeholder="Email Address"
          />
          <Buttons smallButton={true} text="Sign up" />
        </form>
        <div className={`${styles.copyright}`}>
          <p className={`${styles.copyright_trext}`}>not for commercial use</p>
          <p className={`${styles.copyright_year}`}>2022</p>
        </div>
      </div>
    </section>
  );
};
