import React, { Component } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  closeButton: {
    position: 'absolute',
	right:0,
	top:0,
	},
 
}


class ModalPost extends Component {

closeModal=()=>{
	this.props.close();
}
  render() {
	  
   return (
   	<div>
          <DialogTitle id="alert-dialog-title" >
			{this.props.title}
			<IconButton aria-label="Close" className={this.props.classes.closeButton} onClick={this.closeModal}>
				<CloseIcon />
			</IconButton>
		  </DialogTitle>
			
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
			{this.props.text}
            </DialogContentText>
          </DialogContent>
          
	</div>

    );
  }
}

export default withStyles(styles)(ModalPost);
