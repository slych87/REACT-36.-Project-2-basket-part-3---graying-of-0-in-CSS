
// Wyszarzenie liczby 0 - css
// destrukturyzacja

class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 1,
  }

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1,
    })
  }

  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1,
    })
  }

  handleBuy = () => {
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: 0,
    })
  }

  render() {

    const style = this.state.shoppingCart === 0 ? { opacity: 0.3 } : {};

    return (
      <div>
        <button disabled={this.state.shoppingCart ? false : true} onClick={this.handleRemoveFromCart}>-</button>

        <span style={style}> {this.state.shoppingCart} </span>

        <button disabled={this.state.shoppingCart === this.state.availableProducts ? true : false} onClick={this.handleAddToCart}>+</button>
        {this.state.shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))