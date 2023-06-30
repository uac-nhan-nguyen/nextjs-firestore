import {useCallback, useEffect, useState, Dispatch, SetStateAction} from 'react';

const callbacks: Set<Dispatch<SetStateAction<Theme>>> = new Set();
type Theme = 'light' | 'dark';
let _theme: Theme = 'light';

const triggerTheme = () => {
  localStorage.setItem('theme', _theme);
  document.documentElement.setAttribute('data-theme', _theme);
  callbacks.forEach((fn) => {
    fn(_theme);
  });
};

export const initTheme = () => {
  const stored = localStorage.getItem('theme');
  switch (stored) {
    case 'dark':
      _theme = stored;
      break;
    default:
      _theme = 'light';
      break;
  }

  triggerTheme();
};

export const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(_theme);

  const toggle = useCallback(() => {
    _theme = _theme === 'light' ? 'dark' : "light";
    triggerTheme();
  }, [callbacks]);

  useEffect(() => {
    callbacks.add(setTheme);
    setTheme(_theme);
    return () => {
      callbacks.delete(setTheme);
    };
  }, [setTheme]);

  return [theme, toggle];
};
