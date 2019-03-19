import React from 'react';
import PropTypes from 'prop-types';

const LoadingSpinner = ({
    customClass
}) => {
    return (
        <span className={customClass}>loading...</span>
    );
};

LoadingSpinner.propTypes = {
    customClass: PropTypes.string
};

LoadingSpinner.defaultProps = {
    customClass: ''
};

export default LoadingSpinner;
