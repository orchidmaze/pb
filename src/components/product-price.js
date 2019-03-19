import React from 'react';
import PropTypes from 'prop-types';

const ProductPrice = ({
    customClass,
    currency,
    price,
    priceLabel
}) => {
    return (
        <p className={customClass}>
          {priceLabel &&
            priceLabel
          } <span>{currency}{price.toFixed(2)}</span>
        </p>
    );
};

ProductPrice.propTypes = {
    customClass: PropTypes.string,
    currency: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceLabel: PropTypes.string
};

ProductPrice.defaultProps = {
    customClass: 'product__price',
    priceLabel: null
};

export default ProductPrice;