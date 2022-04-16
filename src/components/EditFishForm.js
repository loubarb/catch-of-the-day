import React from 'react';
import { formatPrice } from '../helpers';

class EditFishForm extends React.Component {
  handleChange = (e) => {
    // 1. take copy of current fish
    const updatedFish = { ...this.props.fish, [e.target.name]: e.target.value };
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={formatPrice(this.props.fish.price)}
        />
        <select
          name="select"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        ></textarea>
        <img src={this.props.fish.image} alt={this.props.fish.name} />
      </div>
    );
  }
}

export default EditFishForm;
