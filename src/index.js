import React from 'react';
import ReactDOM from 'react-dom';
const arr = [];
// in react v16 it's possible for render() to return undefined an array of the elements
ReactDOM.render(
  [
<h1>ye rista kya kahalata hai</h1>,
<p>hey this is paragraph </p> ,
<h2>please subscribe my channel</h2>
],document.getElementById('root'));

var h1 = document.createElement('h1');
h1.innerHTML = 'Hello Dinesh';
document.getElementById('root').appendChild(h1);