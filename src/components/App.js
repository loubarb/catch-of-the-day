import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    // 1. take a copy of state
    const fishes = {...this.state.fishes}
    // 2. add new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. set new fishes object to update state
    this.setState({
      fishes: fishes
    });
  };

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
        
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;