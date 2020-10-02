import React from 'react';
import starFillSvg from '../assets/img/star-fill.svg';
import starHalfSvg from '../assets/img/star-half.svg';
import starEmptySvg from '../assets/img/star-empty.svg';

const StarImage: React.FC<{ val: number }> = ({ val }) => {
  return (
    (val === 2) ? <img src={starFillSvg} alt="Full star icon" />
      : (val === 1)
      ? <img src={starHalfSvg} alt="Half star fill icon" />
      : <img src={starEmptySvg} alt="Empty star icon" />
  );
};

export default StarImage;