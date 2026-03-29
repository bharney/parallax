import * as $ from 'jquery';
(window as any).jQuery = $;
(window as any).$ = $;

import 'bootstrap';
import 'wowjs';
import 'jquery.easing';
import 'jquery-mousewheel';

import '../styles/main.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
