import React, { Component } from 'react';
import { observer } from "mobx-react";
import './play.css';

class Play extends Component {

	//We add this piece so that the component will focus after it is rerendered
    componentDidMount() {
        this.input.focus();
    }

	render(){
		const {level} = this.props;
		
		return(
		<div className="Play" onKeyPress={(e) => {level.handleKeyPress(e.charCode)}}tabIndex="0" ref={(node) => this.input = node}>
			<div className="Play__background flex flex-wrap">
				{ level.gameTiles }
			</div>
			<div className="Play__timer">
				<div className="Play__timer-text tr mt2 f3 dark-red">
				 { level.time }
				</div>
			</div>
		</div>);
	}
}

export default observer(Play);