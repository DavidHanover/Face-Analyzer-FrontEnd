import React from 'react';

class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			name: ''
		}
	}

	onPasswordChange = (e) => {
	this.setState({password: e.target.value});
	}

	onEmailChange = (e) => {
		this.setState({email: e.target.value});
	}

	onNameChange = (e) => {
		this.setState({name: e.target.value});
	}
	onSubmitSignIn = () => {
		fetch('http://localhost:3000/register', {
			method:'post',
			headers:{'Content-Type':'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
			})
		})
			.then(response => response.json())
			.then(user => {
				if (user.id){
					this.props.loadUser(user);
					this.props.routeChange('home');
				}
			})
	}

	render(){
				return(
				<article className="br5 ba b--black-10 shadow-5 mv4 w-100 w-50-m w-25-1 mw6 center">
					<main className="pa4 black-80">
					  <div className="measure">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f4 fw6 ph0 mh0">Create a New Account!</legend>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
					        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text"name="enterName"  id="enterName" onChange = { this.onNameChange }/>
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"onChange = { this.onEmailChange }/>
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"onChange = { this.onPasswordChange }/>
					      </div>
					    </fieldset>
					    <div className="">
					      <input onClick = {this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Create Account"/>
					    </div>
					    <div className="lh-copy mt3">
					    </div>
					  </div>
					</main>
				</article>
			)}
}

export default Register;