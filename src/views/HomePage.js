import React from 'react';

import LoadingSpinner from '../components/loading-spinner';
import Product from '../components/product';

import '../stylesheets/global.scss';
import '../stylesheets/lister.scss';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }

    componentDidMount () {
        this.loadProducts();
    }

    loadProducts = () => {
        var xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                this.setState({
                    data: JSON.parse(xhr.responseText)
                });
            } else {
                this.setState({
                    data: xhr.responseText
                });
            }
        };

        xhr.open('GET', '/api/products');
        xhr.send();
    }

    render () {
        const { data } = this.state;

        return (
            <main className="lister">
                {data
                    ? data.map((product, index) => (<Product key={`product-${index}`} {...product} />))
                    : <LoadingSpinner />
                }
            </main>
        );
    }
}

export default HomePage;
