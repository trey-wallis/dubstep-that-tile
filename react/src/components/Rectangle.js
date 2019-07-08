import React from 'react';
import PropTypes from 'prop-types';

const Rectangle = props => {

  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    rectangle: {
      fill: props.color,
      strokeWidth: 2,
      stroke: '#000000'
    },
  };

  return (
    <svg
      style={styles.svg}
      width={`${props.width}px`}
      height={`${props.height}px`}
      draggable={false}
      viewBox="0 0 64 128"
      onClick={props.mouse}>
	    <rect id={props.id} width={`${props.width}px`} height={`${props.height}px`} style={styles.rectangle}/>
    </svg>
  );
};

Rectangle.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

Rectangle.defaultProps = {
  width:64,
  height:128,
};

export default Rectangle;
