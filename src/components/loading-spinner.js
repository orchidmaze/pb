import React from 'react';
import PropTypes from 'prop-types';

const LoadingSpinner = ({
    customClass
}) => {
    return (
        <p className={customClass}>loading...</p>
    );
};

LoadingSpinner.propTypes = {
    customClass: PropTypes.string
};

LoadingSpinner.defaultProps = {
    customClass: ''
};

export default LoadingSpinner;
