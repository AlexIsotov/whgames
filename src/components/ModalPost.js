import React, { Component } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ModalPost extends Component {

  render() {
	  
   return (
   	<div>
          <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
			{this.props.text}
            </DialogContentText>
          </DialogContent>
          
	</div>

    );
  }
}

export default (ModalPost);
