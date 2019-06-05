import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.css";

export default class Main extends Component {
  state = {
    products: [],
    productInfo: {},
    currentlyPage: 1
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;

    // this.setState({products: docs, productInfo: productInfo});
    //                                mesmo nome e mesma posição
    this.setState({ products: docs, productInfo, currentlyPage: page });
  };

  prevPage = () => {
    const { currentlyPage, productInfo } = this.state;

    if (currentlyPage === 1) return;

    const pageNumber = currentlyPage - 1;

    this.loadProducts(pageNumber);
  };

  nextPage = () => {
    const { currentlyPage, productInfo } = this.state;

    if (currentlyPage === productInfo.pages) return;

    const pageNumber = currentlyPage + 1;

    this.loadProducts(pageNumber);
  };

  render() {
    const { products, currentlyPage, productInfo } = this.state;

    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <Link to={`/products/${product._id}`}>Acessar</Link>
          </article>
        ))}
        <div className="actions">
          <button disabled={currentlyPage === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={currentlyPage === productInfo.pages} onClick={this.nextPage}>Próximo</button>
        </div>
      </div>
    );
  }
}
