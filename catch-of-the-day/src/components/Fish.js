import React from 'react';

import { formatPrice } from '../helpers'


class Fish extends React.Component {
  // since this function is a one liner and is used only in the button here
  // we could have passed it as an inline funtion below. in the onClick
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  }

  render() {
    // destructuring
    const {image, name, desc, price, status } = this.props.details;
    
    const isAvailable = status === 'available';

    return (
      <li className='menu-fish'>
        <img src={image} alt={name} />
        <h3 className="fish-name">{name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        {/* <p>{status}</p> */}
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? "Add To Order" : "Sold Out"}
        </button>
      </li>
    )
  }
}

export default Fish;