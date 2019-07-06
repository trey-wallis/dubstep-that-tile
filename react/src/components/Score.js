import React from 'react';

const Score = props => {
  return (
    <div className={"Score mv2 flex justify-between " + props.class}>
      <div className="Score__name f4">{props.name}</div>
      <div className="Score__date f4 pl4">{props.date}</div>
      <div className="Score__score f4">{props.score}s</div>
    </div>
  );
}

export default Score;
