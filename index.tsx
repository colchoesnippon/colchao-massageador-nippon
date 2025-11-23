import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Google Tag
const script1 = document.createElement("script");
script1.async = true;
script1.src = "https://www.googletagmanager.com/gtag/js?id=AW-955599478";
document.head.appendChild(script1);

const script2 = document.createElement("script");
script2.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-955599478');
`;
document.head.appendChild(script2);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);