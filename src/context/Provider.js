import React from 'react';
import PropTypes from 'prop-types';
import contextGlobal from '.';

function Provider({ children }) {
  const contextValue = {};
  return (
    <contextGlobal.Provider value={ contextValue }>
      {children}
    </contextGlobal.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
