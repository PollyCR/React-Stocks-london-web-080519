import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(stock => <Stock key = {stock.id} stock = {stock} selectStock = {this.props.selectStock}/>)//render the list of stocks here
        }
      </div>
    );
  }

}
// this.props.selectStock(stock)}

export default StockContainer;
