import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  render() {

    const image = this.props.details.image;
    const name = this.props.details.name;
    const desc = this.props.details.desc;
    const price = this.props.details.price;
    const status = this.props.details.status;

    return (
      <li className='menu-fish'>
        <img src={image} alt={name} />
        <h3 className='fish-name'>
          {name}
          <span className='price'>{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button>Add to Cart</button>
      </li>
    );
  }
}

export default Fish;