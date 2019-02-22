import React, { Component } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import Tooltip from '@material-ui/core/Tooltip'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

const styles = {
closeButton: {
    position: 'absolute',
	right:0,
	top:0,
	},
}


class AddNewPost extends Component {
constructor(props){
	super(props);
	this.state={
		title:'',
		text:'',
		confirm: false,
		cancel: false,
	};
}
  
closeModal=()=>{
	if (this.state.title!=='' ||this.state.text!==''){
			this.setState({cancel:true})	
	}
	else {this.props.close()}
}

handleTitleChange= (e)=>{
	this.setState({title: e.target.value})
}
handleTextChange= (e)=>{
	this.setState({text: e.target.value})
}
confirmClose= ()=>{
	this.setState({confirm:true}, ()=>{this.props.close();})
}
cancelClose= ()=>{
	this.setState({cancel:false})
}
  render() {
	  
   return (
   	<div>
          <DialogTitle>
			Add new post
			<IconButton aria-label="Close" className={this.props.classes.closeButton} onClick={this.closeModal}>
				<CloseIcon />
			</IconButton>
		  </DialogTitle>
          <DialogContent>
            <DialogContentText>
			<form>
				<TextField
				  id="newPost-title"
				  label="Title"
				  value={this.state.title}
				  onChange={this.handleTitleChange}
				  margin="normal"
				  variant="outlined"
				  fullWidth='true'
				  required
				/>
				
				<TextField
				  id="newPost-text"
				  label="Text"
				  value={this.state.text}
				  onChange={this.handleTextChange}
				  margin="normal"
				  variant="outlined"
				  fullWidth='true'
				  required
				/>
			</form>
            </DialogContentText>
			
		</DialogContent>
			<Dialog
			  open={this.state.cancel}
			  onClose={this.confirmClose}
			 >
			<DialogTitle>
			Are u sure
			</DialogTitle>
			<DialogContent>
				If you press Yes all changes will discard!
			</DialogContent>
			<DialogActions>
			 <Button onClick={this.confirmClose}>Yes</Button>
			 <Button onClick={this.cancelClose}>Nope</Button>
			</DialogActions>
			</Dialog>
	</div>

    );
  }
}

export default withStyles(styles)(AddNewPost);