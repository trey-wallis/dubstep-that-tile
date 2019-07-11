import React from 'react';

const Score = props => {
  return (
    <div className={"Score mv2 " + props.class}>
      <div className="Score__date f4 fl w-third tc">{props.date}</div>
      <div className="Score__name f4 fl w-third tc">{props.name}</div>
      <div className="Score__time f4 fl w-third tc">{props.time}s</div>
    </div>
  );
}

export default Score;
