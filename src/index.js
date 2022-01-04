import React, { Suspense } from 'react'
import ReactDOM from 'react-dom';
import store from './lib'
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Loader from './components/loader'

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar'],
    fallbackLng: 'en',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    react: { useSuspense: false },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  })
ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <Provider store={store}>
      <App />
    </Provider>

  </Suspense>,
  document.getElementById('root')
);

reportWebVitals();
