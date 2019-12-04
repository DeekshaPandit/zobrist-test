import React from 'react';
import axios from 'axios';
import './product.css';

const SIZE = 8;

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
      return axios.get(`http://localhost:3001/api/products/${this.state.page}/${this.state.size}`).then(data=> {
       
        let products = data.data.result;
        this.setState({
            products: [...this.state.products, ...products]
          })
 
      });
    }

    showMore() {
          let page = this.state.page;
          ++page;
          this.setState({page:page},function() {
            this.fetchProducts();
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
                   this.state.products.map((product, index)=> (
                    <div className="tiles" key={index}>
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
            <input type="button" className="show_more_btn" onClick={()=>{this.showMore(); }} value="show more" /> 
            </React.Fragment>
        )

    }
}

