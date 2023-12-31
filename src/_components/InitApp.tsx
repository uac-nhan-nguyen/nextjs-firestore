'use client';
import { initTheme } from '@/hooks/useTheme';
import { useEffect } from 'react';
import {initFirebase} from "@/firebase/config";

export const InitApp = () => {
  useEffect(() => {
    initTheme();
    initFirebase();
  }, []);
  return <>
  </>;
};


// Ignore 
const _error = console.error;
console.error = (...e) => {
  if (!(e.toString().startsWith('Warning: '))){
    _error(...e)
  }
}