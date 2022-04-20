import React from 'react';
import { formatPrice } from '../helpers';
import PropTypes from 'prop-types';

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number,
    }),
    addToOrder: PropTypes.func,
  };
  render() {
    const image = this.props.details.image;
    const name = this.props.details.name;
    const desc = this.props.details.desc;
    const price = this.props.details.price;
    const status = this.props.details.status;

    const isAvailable = status === 'available';

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {isAvailable ? 'Add To Order' : 'Sold Out'}
        </button>
      </li>
    );
  }
}

export default Fish;
