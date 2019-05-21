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

class SignUp extends Component {
constructor(props){
	super(props);
	this.state={
		open:true,
		email:'',
		passwrd:'',
    passwrdAgain:'',
    confirm: true,
		checked: false,
		};
}

close=()=>{
    this.setState({passwrd:'', passwrdAgain:'', email:''});
    this.props.closeSignUp();
};

signUp=()=>{
  if (this.state.confirm === true) {alert('Please check password!')}
  else { //no func only for the first time
    this.setState({passwrd:'', passwrdAgain:'', email:''});
    this.props.closeSignUp();
  }
}

handleEmailChange=(e)=>{
	this.setState({email: e.target.value});
};

handlePasswordChange=(e)=>{
	this.setState({passwrd: e.target.value});
};

handlePasswordAgainChange=(e)=>{
	this.setState({passwrdAgain: e.target.value}, ()=>{
    if(this.state.passwrdAgain===this.state.passwrd) {
      this.setState({confirm: false});
    }
    else {this.setState({confirm: true});}
  });
};

check =()=>{
	this.setState({checked: !this.state.checked});
}
  render() {
	  return (
   		<div>
          <Dialog
					 open={this.props.open}
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
                  <TextField
  								  id="passwrdAgain"
  								  label="Confirm Password"
  								  value={this.state.passwrdAgain}
  								  onChange={this.handlePasswordAgainChange}
  								  margin="normal"
                    error={this.state.confirm}
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
						          label="Use your email to send news and ..."
						        />
							</form>
						</DialogContent>
						<DialogActions>
							<Tooltip title='SignUp!'>
							 <Button color='primary' onClick={this.signUp}>Sign up!</Button>
							</Tooltip>
							<Tooltip title='Cancel'>
							 <Button color='secondary' onClick={this.close}>Cancel</Button>
							</Tooltip>
						</DialogActions>
					</Dialog>
		</div>
    );
  }
}

export default SignUp;
