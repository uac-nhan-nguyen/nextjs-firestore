'use client';
import {useTheme} from '@/hooks/useTheme';
import styles from './ThemeSwitch.module.css'
import classNames from "classnames";

export const ThemeSwitch = () => {
  const [theme, toggle] = useTheme();
  return (
    <button onClick={toggle}
            className={classNames(`${styles.toggleSwitch} cursor-pointer`, {
              [`${styles.toggleSwitchDark}`]: theme === 'dark',
            })}>
    </button>
  );
};
