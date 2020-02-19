import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addFeature, removeFeature, addTotal } from './actions/index'

import { connect } from 'react-redux'

const App = props => {
  console.log(props, 'App')

  const removeFeature = item => {
    props.removeFeature(item)
    props.addTotal(-item.price)
  };

  const buyItem = item => {
    props.addFeature(item)
    props.addTotal(item.price)
  };

  return (
    <div className="boxes">
      <div className="box">
      <Header 
        car={props.car} 
        additionalPrice={props.additionalPrice} 
        />
        <AddedFeatures 
        addFeature={props.addFeature}
        removeFeature={removeFeature}
        car={props.car} 
        />
      </div>
      <div className="box">
      <AdditionalFeatures 
        buyItem = {buyItem}
        additionalFeatures={props.additionalFeatures} 
        />
        <Total 
        car={props.car} 
        additionalPrice={props.additionalPrice} 
        />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return{
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
  }
}

//This is connecting some stuff.  LEARN MORE ABOUT THIS TOO!!
export default connect(mapStateToProps, {
  addFeature,
  removeFeature,
  addTotal
})(App);
