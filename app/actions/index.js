export const NEXT_SLIDE = 'NEXT_SLIDE';
export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE';

export function nextSlide() {
  return {
    type: NEXT_SLIDE
  };
}

export function previousSlide() {
  return {
    type: PREVIOUS_SLIDE
  };
}
