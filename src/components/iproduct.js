import React from 'react'
import Navbar from './navbar'
import { connect } from 'react-redux'

class Iproduct extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Navbar />
        {this.props.products.filter(product => {
          return product.id === this.props.location.state.selectedProduct}).map((product) => {
          return <main className="individual-container" key={product.id}>
                    <img src={product.image_url} className="ind-product-img" alt="picture of smoothie" />
                    <div  className="individual-p-info">
                      <p className="individual-p-name">{product.name}</p>
                      <p className="individual-p-kind">{product.kind}</p>
                      <p className="individual-p-tag">{product.tagline}</p>
                      <p className="individual-p-kind">{product.description}</p>
                      <p className="individual-p-tag">Ingredients</p>
                      <p className="individual-p-kind">{product.ingredients}</p>
                    </div>
                </main>})}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  products: state.items
});

export default connect(mapStateToProps)(Iproduct);
