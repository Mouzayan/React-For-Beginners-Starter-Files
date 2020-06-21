import React from "react";

import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";
 
class App extends React.Component {
  // state as empty object. within it are the objects we will be using
  state = {
    fishes: {}, // empty object of many fishes
    order: {}, // empty object
  };

  // lifecycle events go here if any
  // then custom events (functions) go after 

  addFish = (fish) => {
    //1. take a copy of the existing state
    const fishes = { ...this.state.fishes };
    //2. add new fish to fishes variable. Date.now() gives you the number of 
    // milliseconds
    fishes[`fish${Date.now()}`] = fish; //fish is the object that got passed in
    // to the AddFishForm
    // 3. set the new fishes object to state. this.setState is a built in method
    this.setState({ fishes: fishes }); // you can simply pass fishes here in
      // this way this.setState({ fishes }) 
  };

  // function to load sample fishes from the AddFishForm into state
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes }); 
  }

  addToOrder = (key) => {
    //1. take a copy of state
    const order = { ...this.state.order };
    //2. add to the order or update to the number in our order
    order[key] = order[key] + 1 || 1;
    //3.  call setState to update our state object
    this.setState({ order: order }); // you can simply pass order here in
    // this way this.setState({ order })
  }

  render() {
    return (
      <>
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Seafood Market" />
            <ul className="fishes">
              {Object.keys(this.state.fishes).map(key =>
                <Fish
                  key={key}
                  //we added the index property so that we can access the object key 
                  //which is the required argument in the addToOrder() function. to access
                  //the key inside of a Fish object, so we will turn key into its own prop
                  // and here we are using index
                  index={key}
                  details={this.state.fishes[key]}
                  addToOrder={this.addToOrder}
                />
              )}
              
            </ul>
          </div>
          {/* use are not using the spread operator to spread everything from 
          state into order because sometimes we want to only pass selected 
          things from state and not eveery single thing */}
          <Order fishes={this.state.fishes} order={this.state.order} />

          <Inventory addFish={this.addFish}
            loadSampleFishes={this.loadSampleFishes} />
        </div>
      </>
    );
  }
}

export default App;
