import React from 'react';
import styles from './modalOverlay.module.css';

export function ModalOverlay({ onClick }) {
  return <div className={styles.modalOverlay} onClick={onClick}></div>;
}
