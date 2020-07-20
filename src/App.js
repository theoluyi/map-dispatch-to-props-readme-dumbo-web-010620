import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    // this.props.store.dispatch(addItem()); 
    // this.props.dispatch(addItem());  // not quite
    this.props.addItem(); 
  }

  render() {
    debugger
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

// const mapDispatchToProps = dispatch => {
//   // this is weird... we are returning an object with the key addItem
//   // pointing to the return value of an anon ƒ invoking dispatch with addItem() as its arg
//   // this is a lotta object + function nesting

//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   }
// }


// map state to props basically allows the component to 
// 'inherit' app state from redux store as props locally
export default connect(mapStateToProps, {addItem})(App);
