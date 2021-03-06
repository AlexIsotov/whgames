import React, { Component } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tooltip from '@material-ui/core/Tooltip'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import SignUp from './SignUp';

class LoginBox extends Component {
constructor(props){
	super(props);
	this.state={
		open:true,
		email:'',
		passwrd:'',
		checked: false,
		signUp: false,
		};
}

close=()=>{
	this.setState({open: false});
	this.props.closeLoginBox();
};

handleEmailChange=(e)=>{
	this.setState({email: e.target.value});
};

handlePasswordChange=(e)=>{
	this.setState({passwrd: e.target.value});
};

check =()=>{
	this.setState({checked: !this.state.checked});
}

closeSignUp=()=>{
	this.setState({signUp:false})
}

  render() {
	  return (
   		<div>
          <Dialog
					 open={this.state.open}
					 onClose={this.close}
					>
						<DialogTitle>
						Sign in
						</DialogTitle>
						<DialogContent>
							<form>
								<TextField
								  id="email"
								  label="Email"
								  value={this.state.email}
								  onChange={this.handleEmailChange}
								  margin="normal"
								  variant="outlined"
								  fullWidth={true}
								  required
								  autoFocus
								  autoComplete='off'
								  type='email'
								/>
								<TextField
								  id="passwrd"
								  label="Password"
								  value={this.state.passwrd}
								  onChange={this.handlePasswordChange}
								  margin="normal"
								  variant="outlined"
								  fullWidth={true}
								  required
								  autoComplete='off'
								  type='password'
								  />
									<FormControlLabel
					          control={
											<Checkbox
					              checked={this.state.checked}
					              onChange={this.check}
					              value={this.state.checked.toString()}
												color="primary"
					            />
					          }
					          label="Stay online"
					        />
							</form>
							<Link component="button" onClick={()=>{this.setState({signUp: true})}} underline='none'> Don't have account? Sign up and start to comunicate! </Link>
						</DialogContent>
						<DialogActions>
							<Tooltip title='Log in'>
							 <Button color='primary' onClick={this.close}>Sign in!</Button>
							</Tooltip>
							<Tooltip title='Cancel'>
							 <Button color='secondary' onClick={this.close}>Cancel</Button>
							</Tooltip>
						</DialogActions>
					</Dialog>
			  	<SignUp open={this.state.signUp} closeSignUp={this.closeSignUp}/>
		</div>
    );
  }
}

export default LoginBox;
