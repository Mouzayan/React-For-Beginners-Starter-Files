import React, { useCallback } from 'react';

import { formatPrice } from '../helpers'

class Order extends React.Component {
  //  {/* we loop over fish id's to display fishes and how many 
  //   we have in cart. we loop via an unordered list */}
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    // check if fish is available before returning list item or ordered fishes
    const isAvailable = fish.status === 'available';
    if (!isAvailable) {
      return (
        // all list items inside of order need unique key props so react can 
        // quickly find them if it needs to update them
        <li key={key}>
        Sorry {fish ? fish.name : 'fish'} is no longer available
     </li>
      )}
    return (
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
      </li>
    );
  };

  render() {
    // to tally up total of actual order, 1st we need an array of all the order id's
    const orderIds = Object.keys(this.props.order); 
    // then we need total for how much they cost by running a reduce. Reduce
    // is like a for loop or map. it returns a tally (instead of a new array)
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * fish.price);
      }
      return prevTotal;
    }, 0); //with reduce you always need a starting value. in this case we use 0

    return (
      <div className='order-wrap'>
        <h2>Order</h2>
       
        <ul className="order">
            {orderIds.map(this.renderOrder)}
        </ul>
           
        <div className='total'>
          
          Total:
          <strong>
            {formatPrice(total)}
          </strong>
         </div>
      </div>
    )
  }
}

export default Order;