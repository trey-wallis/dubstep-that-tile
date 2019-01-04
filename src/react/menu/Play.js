import React, { Component } from 'react';
import { observer } from "mobx-react";
import './play.css';

class Play extends Component {

	//We add this piece so that the component will focus after it is rerendered
    componentDidMount() {
        this.input.focus();
    }

	render(){
		const {ui, domain} = this.props;
		
		return(
		<div className="Play flex flex-wrap" onKeyPress={(e) => {ui.handleKeyPress(e.charCode)}} tabIndex="0" ref={(node) => this.input = node}>
			{ui.filterTiles}
		</div>);
	}
}

export default observer(Play);