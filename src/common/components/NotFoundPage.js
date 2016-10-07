import React from 'react';
import { Link } from 'react-router';


const NotFoundPage = () => (
  <div className="info-card not-found-page">
    <div className="info-card-title">
      <h1>404</h1>
    </div>
    <div className="info-card-content">
      <h2>Page not found!</h2>
      <p><Link to="/">Go back to the main page</Link></p>
    </div>
  </div>
);

export default NotFoundPage;
