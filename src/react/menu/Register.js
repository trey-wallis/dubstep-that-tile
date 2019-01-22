import React, { Component } from 'react';

class Register extends Component {

	render(){
		const {ui, domain} = this.props;
		
		return(
		<div className="Register">
			{ui.loginHeader}
			{ui.title}
			<div className="f3-ns f4 tc mt4">Register</div>
				<div className="Register__form flex flex-wrap justify-center mt2">
					<div className="b">Username</div>
					<input className="outlne--none bg-color--black-t1 bw0 outline--none f4-ns f5 mb3" type="text" placeholder="Username" />
					<div className="b">Password</div>
					<input className="bg-color--black-t1 bw0 outline--none f4-ns f5 mb3" type="password" placeholder="Password" />
					<div className="b">Repeat Password</div>
					<input className="bg-color--black-t1 bw0 outline--none f4-ns f5 mb3" type="password" placeholder="Repeat Password" />
					<button className="bg-color--inherit bw0 outline--none f4-ns f5 b mt-2 dim">Submit</button>
				</div>
			<div className="Login__request red tc mt2 hide">*Invalid username or password</div>
			{ui.backButton}
		</div>
		);
	}
}

export default Register;