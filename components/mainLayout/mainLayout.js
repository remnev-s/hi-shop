import styles from './mainLayout.module.scss';

export const MainLayout = ({ children }) => {
  return <main className={`${styles.main} `}>{children}</main>;
};
