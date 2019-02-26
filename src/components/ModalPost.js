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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const styles = {
closeButton: {
  position: 'absolute',
	right:0,
	top:0
},
commentsSection:{
	marginTop: 5,
	borderTop: '1px solid gainsboro'
},
commentsHeader: {
	display: 'flex',
	justifyContent: 'space-between'
},
expand: {
	transform: 'rotate(0deg)',
  marginLeft: 'auto'
},
expandOpen: {
  transform: 'rotate(180deg)',
},
}

class ModalPost extends Component {
  constructor(props){
	   super(props);
	   this.state={expanded:false};
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

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
  			  <div className={this.props.classes.commentsSection}>
  				    <div className={this.props.classes.commentsHeader}>
  					       <Typography variant='h5' color='default'> Comments </Typography>
  					       <Tooltip title="Show admin comments">
  					            <IconButton
  						           className={classnames(this.props.classes.expand, {
  						           [this.props.classes.expandOpen]: this.state.expanded,
  						           })}
              						onClick={this.handleExpandClick}
              						aria-expanded={this.state.expanded}
              						aria-label="Show more"
              					  >
  						              <ExpandMoreIcon />
  					             </IconButton>
  					         </Tooltip>
  				     </div>
      				 <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
      				  	<Typography paragraph>Username:</Typography>
      					  <Typography paragraph>User comment!</Typography>
      				 </Collapse>
  			  </div>
  		  </DialogContent>
      </div>
    );
  }
}

export default withStyles(styles)(ModalPost);
