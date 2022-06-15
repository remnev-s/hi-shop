import React from 'react';
import styles from './buttons.module.scss';
import clsx from 'clsx';

import block from 'module-clsx';
const style = block(styles);

export const Buttons = React.forwardRef(
  ({ onClick, href, text, mediumButton, smallButton }, ref) => {
    const classButton = clsx(
      { small_button: smallButton },
      { medium_button: mediumButton }
    );
    return (
      <a
        className={`${styles.main_button} ${style(classButton)}`}
        href={href}
        onClick={onClick}
        ref={ref}
      >
        {text}
      </a>
    );
  }
);

Buttons.displayName = 'Buttons';
