import React, { PropTypes } from 'react';


const AppContainer = ({ children }) => (
  <div className="app-container">
    {children}
  </div>
);

AppContainer.propTypes = {
  children: PropTypes.element
};

export default AppContainer;
