import React from 'react';
import messages from 'lib/text';
import Axios from 'axios';
// import CezerinClient from 'cezerin2-client';
// import CyborgsApiClient from '../lib/cyborgsClient/cyborgsClient';
import settings from 'lib/settings';
import * as auth from 'lib/auth';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

export default class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: localStorage.getItem('dashboard_email') || '',
			password: '',
			isFetching: false,
			isAuthorized: false,
			emailIsSent: false,
			error: null
		};
	}

	handleChange = (event, field) => {
		this.setState({
			[field]: event.target.value
		});
	};

	handleKeyPress = e => {
		if (e.keyCode === 13 || e.which === 13) {
			this.handleSubmit();
		}
	};

	handleSubmit = () => {
		this.setState({
			isFetching: true,
			isAuthorized: false,
			emailIsSent: false,
			error: null
		});
		const email = this.state.email;
		const password = this.state.password;
		// Axios.post(`${settings.apiBaseUrl}/authorizeWithEmailAndPassword`, {
		// 	email,
		// 	password
		// })
		// 	.then(authorizeResponse => {
		// 		console.log(authorizeResponse);
		// 		this.setState({
		// 			isFetching: false,
		// 			isAuthorized: authorizeResponse.data.isAuthorized,
		// 			// emailIsSent: authorizeResponse.json.sent,
		// 			error: authorizeResponse.data.error
		// 		});
		// 		if (authorizeResponse.data.isAuthorized) {
		// 			auth.AuthorisWithEmailAndPassword(authorizeResponse.data.token);
		// 		}
		// 	})
		// 	.catch(error => {
		// 		console.log("error");
		// 		console.log(error);
		// 		this.setState({
		// 			isFetching: false,
		// 			isAuthorized: false,
		// 			// emailIsSent: false,
		// 			error
		// 		});
		// 	});

		// CezerinClient.authorize(settings.apiBaseUrl, this.state.email)
		// 	.then(authorizeResponse => {
		// 		this.setState({
		// 			isFetching: false,
		// 			isAuthorized: false,
		// 			emailIsSent: authorizeResponse.json.sent,
		// 			error: authorizeResponse.json.error
		// 		});
		// 	})
		// 	.catch(error => {
		// 		this.setState({
		// 			isFetching: false,
		// 			isAuthorized: false,
		// 			emailIsSent: false,
		// 			error
		// 		});
		// 	});
	};

	componentWillMount() {
		// todo check if stored token valid
		auth.validateCurrentToken();
		// auth.checkTokenFromUrl();
	}

	componentDidMount() {}

	render() {
		const {
			email,
			password,
			isFetching,
			isAuthorized,
			emailIsSent,
			error
		} = this.state;

		let response = null;
		if (isFetching) {
			response = (
				<div className="loginSuccessResponse">{messages.messages_loading}</div>
			);
		} else if (isAuthorized) {
			response = (
				<div className="loginSuccessResponse">{messages.loginSuccess}</div>
			);
		} else if (isAuthorized === false && error) {
			response = <div className="loginErrorResponse">{error}</div>;
		}

		return (
			<div className="row col-full-height center-xs middle-xs">
				<div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
					<Paper className="loginBox" zDepth={1}>
						<div className="loginTitle">{messages.loginTitle}</div>
						<div className="loginDescription">{messages.loginDescription}</div>
						<div className="loginInput">
							<TextField
								type="email"
								value={email}
								onChange={event => this.handleChange(event, 'email')}
								onKeyPress={this.handleKeyPress}
								label={messages.email}
								fullWidth
								hintStyle={{ width: '100%' }}
								hintText={messages.email}
							/>
							<TextField
								type="password"
								value={password}
								onChange={event => this.handleChange(event, 'password')}
								onKeyPress={this.handleKeyPress}
								label={messages.email}
								fullWidth
								hintStyle={{ width: '100%' }}
								hintText={messages.password}
							/>
						</div>
						<RaisedButton
							label={messages.loginButton}
							primary
							disabled={
								isFetching ||
								isAuthorized ||
								email.length < 6 ||
								password.length < 6
							}
							onClick={this.handleSubmit}
						/>
						{response}
					</Paper>
				</div>
			</div>
		);
	}
}
