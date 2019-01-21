import React, { Component } from 'react';
import { observer } from 'mobx-react';
import '../custom.css';

class Login extends Component {

	render(){
		const {ui, domain} = this.props;

		return(
		<div className="Login">
			{ui.loginHeader}
			{ui.title}
			<div className="f3-ns f4 tc mt4">Login</div>
				<div className="Login__form flex flex-wrap justify-center mt2">
					<div className="b">Username</div>
					<input className="outlne--none bg-color--black-t1 bw0 outline--none f4-ns f5 mb3" type="text" defaultValue="username" onChange={ (e) => { domain.username = e.target.value } } />
					<div className="b">Password</div>
					<input className="bg-color--black-t1 bw0 outline--none f4-ns f5 mb3" type="password" defaultValue="password" onChange={ (e) => { domain.password = e.target.value} } />
					<button className="bg-color--inherit bw0 outline--none f4-ns f5 b mt-2 dim" onClick={domain.login}>Submit</button>
				</div>
			<div className="Login__request red tc mt2">{domain.loginResponse}</div>
			{ui.backButton}
		</div>
		);
	}
}

export default observer(Login);