import React from 'react';
import styles from './buttons.module.scss';
import clsx from 'clsx';

export const Buttons = ({ text, mediumButton, smallButton }) => {
  const classButton = clsx(
    { small_button: smallButton },
    { medium_button: mediumButton }
  );
  return (
    <button className={`${styles.classButton} ${styles.main_button}`}>
      {text}
    </button>
  );
};
