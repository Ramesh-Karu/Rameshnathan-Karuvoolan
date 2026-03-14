import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const originalStringify = JSON.stringify;
// @ts-ignore
JSON.stringify = (value: any, replacer?: any, space?: any) => {
  try {
    return originalStringify(value, replacer, space);
  } catch (e) {
    if (e instanceof TypeError && (e.message.includes('circular') || e.message.includes('Circular'))) {
      const cache = new Set();
      return originalStringify(value, (key, val) => {
        if (typeof val === 'object' && val !== null) {
          if (cache.has(val)) {
            return '[Circular]';
          }
          cache.add(val);
        }
        return replacer ? replacer(key, val) : val;
      }, space);
    }
    throw e;
  }
};

const safeStringify = (obj: any) => {
  return JSON.stringify(obj);
};

const originalConsoleError = console.error;
console.error = (...args) => {
  originalConsoleError(...args);
};

const originalConsoleWarn = console.warn;
console.warn = (...args) => {
  originalConsoleWarn(...args);
};

const originalConsoleLog = console.log;
console.log = (...args) => {
  originalConsoleLog(...args);
};

window.addEventListener('error', (e) => {
  console.error(`REAL ERROR: ${e.message}`, e.error);
});

window.addEventListener('unhandledrejection', (e) => {
  console.error(`UNHANDLED REJECTION: ${e.reason?.message || e.reason}`, e.reason);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
