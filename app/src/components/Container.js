import React from 'react';

const Container = props => {
  return(
    <div className="flex flex-column justify-center" style={{width:'256px', height:'512px'}}>
      { props.children }
    </div>
  );
}

export default Container;
