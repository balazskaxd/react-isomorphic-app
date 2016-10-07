import React from 'react';
import { Link } from 'react-router';


const SuccessPage = () => (
  <div className="info-card success-page">
    <div className="info-card-title">
      <h1>Success</h1>
    </div>
    <div className="info-card-content">
      <h2>The user have been added successfully</h2>
      <p><Link to="/">Go back to the main page</Link></p>
    </div>
  </div>
);

export default SuccessPage;
