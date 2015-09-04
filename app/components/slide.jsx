import React, {Component} from 'react';

import Overview from './slides/overview.jsx';
import Todo from './slides/todo.jsx';

var slides = [
  Overview,
  Todo
];

export default class Slide extends Component {
  render() {
    var _Slide = slides[this.props.index]
    return <_Slide/>;
  }
}
