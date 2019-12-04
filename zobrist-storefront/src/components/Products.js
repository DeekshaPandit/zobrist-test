import React from 'react';
import axios from 'axios';
import './product.css';

const SIZE = 10;

export default class ProductListingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            products: [],
            size: SIZE,
            page: 1
        };

       this.fetchProducts.bind(this);
    }

    fetchProducts() {
        console.log("fetch products");
      return axios.get(`http://localhost:3004/products?size=${this.state.size}&page=${this.state.page}`).then(data=> {
        console.log("products data",data);  
        this.setState({
            products: [...this.state.products, data]
          })
      });
    }

    componentDidMount() {
        this.fetchProducts();
    }

    render() {
        return (
            <React.Fragment>
            <p>{this.state.isFetching ? 'Fetching users...' : ''}</p>
            <div className="product-wrapper">
                {this.state.products.length > 0 ?
                   this.state.products[0].data.map((product)=> (
                    <div className="tiles">
                        <div className="product-image-area">
                            <img src="./shoes.jpg" alt="product" />    
                        </div> 
                        <div className="description">
                            <h2>{product.title}</h2>
                            <p>{product.price}</p>
                        </div>
                    </div>
                   ))
                   : ''
                }
            </div>
            </React.Fragment>
        )

    }
}

