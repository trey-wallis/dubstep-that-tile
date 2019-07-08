import React from 'react';

const Score = props => {
  return (
    <div className={"Score mv2 " + props.class}>
      <div className="Score__name f4 fl w-third tc">{props.name}</div>
      <div className="Score__date f4 fl w-third tc">{props.date}</div>
      <div className="Score__score f4 fl w-third tc">{props.score}s</div>
    </div>
  );
}

export default Score;
