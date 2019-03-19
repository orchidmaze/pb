import React from 'react';
import PropTypes from 'prop-types';

const Product = ({
    cta,
    ctaLink,
    currency,
    description,
    image,
    price,
    priceLabel,
    productLabel,
    title
}) => {
    return (
        <article className="product">
            <div className={`product__img ${!productLabel ? 'product__img--padded' : ''}`}>
                <img src={`/dist${image.path}`} alt={image.alt} />
            </div>
            {productLabel &&
                <span className="product__label">{productLabel}</span>
            }
            <div className="product__info">
                <h2  className="product__heading">{title}</h2>
                <p className="product__desc">{description}</p>
                <p className="product__price">{priceLabel} <span>{currency}{price.toFixed(2)}</span></p>
                <a className="product__cta" href={ctaLink}>{cta}</a>
            </div>
        </article>
    );
};

Product.propTypes = {
    cta: PropTypes.string,
    ctaLink: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.shape({
        alt: PropTypes.string,
        path: PropTypes.string.isRequired
    }),
    price: PropTypes.number.isRequired,
    priceLabel: PropTypes.string,
    productLabel: PropTypes.string,
    title: PropTypes.string.isRequired
};

Product.defaultProps = {
    cta: 'Shop Now'
};

export default Product;