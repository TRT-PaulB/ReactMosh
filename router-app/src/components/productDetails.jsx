import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate programmaticlly to /products
    this.props.history.push("/products");

    // do the same with replace but kill history for backbutton
    // often used in login pages - ie once the user has logged in,
    // it would be annoying to take them back to the login page....
    // this.props.history.replace("/products");
  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
