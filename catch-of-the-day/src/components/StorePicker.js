import React from 'react';

import { getFunName } from '../helpers';


class StorePicker extends React.Component {
  myInput = React.createRef();

  // goToStore is now a property, just like myInput is a property on the 
  // component.
  // we set it to an arrow function that will allow us to bind the value
  // of "this", to the storePicker component 
  goToStore = (e) => {
    //1. stop the form from automatically submitting over and over
    e.preventDefault();
    //2. get text from input form. create a ref (reference) to a dom node 
    // on the page
    const storeName = this.myInput.current.value; // "this" references the  
    // instance of the component we are working with, i.e., StorePicker 
    // in this case
    //3. now change the page to /store/name-they-entered (update slug value)
    // change the url w pushstate, without refereshing the page or losing
    // anything we have in memory. so we need React Router from Routers.js
    this.props.history.push(`/store/${storeName}`);
    // we are not reloading the page. we just using push state to change 
    // the url, and then react router is seeing that we are going from this
    // route to another route and hence rendering the appropriate component
    // associated with the route
  }

  render() {
    return (
      <>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter a Store</h2>
          <input
            type='text'
            ref={this.myInput}
            required placeholder='Store Name'
            defaultValue={getFunName()}
          />
          <button type='submit'>Visit Store ➡️</button>
        </form>
      </>
    ) 
  }
}

export default StorePicker;