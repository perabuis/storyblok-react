import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from './components/Page';
import Grid from './components/Grid';
import Feature from './components/Feature';
import Teaser from './components/Teaser';
import Config from "./components/Config";
import HeaderMenu from "./components/HeaderMenu";
import MenuLink from "./components/MenuLink";
import HeroSection from "./components/Hero-section";
import Explanation from "./components/Explanation";
 
storyblokInit({
  accessToken: "22HQOJNd0Bcywe5NDYvhfQtt",
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    feature: Feature,
    grid: Grid,
     config: Config,
  "header_menu": HeaderMenu,
  "menu_link": MenuLink,
  'hero-section': HeroSection,
      explanation: Explanation,
  }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
