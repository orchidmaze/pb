import React from 'react';

import Product from '../components/Product';

import '../stylesheets/global.scss';
import '../stylesheets/listingPage.scss';

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
                    : <p>loading...</p>
                }
            </main>
        );
    }
}

export default HomePage;
