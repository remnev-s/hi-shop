import React from 'react';
import styles from './buttons.module.scss';
import clsx from 'clsx';

import block from 'module-clsx';
const style = block(styles);

export const Buttons = ({ text, mediumButton, smallButton }) => {
  const classButton = clsx(
    { small_button: smallButton },
    { medium_button: mediumButton }
  );
  return (
    <button className={`${styles.main_button} ${style(classButton)}`}>
      {text}
    </button>
  );
};
