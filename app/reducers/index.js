import {combineReducers} from 'redux';
import {
  NEXT_SLIDE,
  PREVIOUS_SLIDE
} from '../actions';

export default combineReducers({
  currentSlide,
  availableSlides
});

function currentSlide(state = 0, action) {
  switch (action.type) {
  case NEXT_SLIDE:
    return state + 1;
  case PREVIOUS_SLIDE:
    return state - 1;
  default:
    return state;
  }
}

function availableSlides(state = 2) {
  return state;
}
