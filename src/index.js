import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import ItineraryBuilder from './components/ItineraryBuilder';

ReactDOM.render(
  <Router>
      <ItineraryBuilder />
  </Router>
  , document.getElementById('root'));
