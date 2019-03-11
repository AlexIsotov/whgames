import React, { Component } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { connect } from "react-redux";
import { createPost } from "../js/actions/actions";

function mapDispatchToProps(dispatch) {
  return {
    createPost: post => dispatch(createPost(post))
  };
}
const styles = {
closeButton: {
  position: 'absolute',
	right:0,
	top:0,
	},
}

class AddNewPostS extends Component {
  constructor(props){
  	super(props);
  	this.state={
  		title:'',
  		text:'',
      infoComment:'',
  		confirm: false,
  		cancel: false,
  	};
  }

closeModal=()=>{
	if (this.state.title!=='' || this.state.text!==''){
			this.setState({cancel:true})
	}
	else {this.props.close()}
};

handleTitleChange=(e)=>{
	this.setState({title: e.target.value})
};

handleTextChange=(e)=>{
	this.setState({text: e.target.value})
};

handleInfoCommentChange=(e)=>{
	this.setState({infoComment: e.target.value})
};

confirmClose=()=>{
	this.setState({confirm:true}, ()=>{this.props.close();})
};

cancelClose=(e)=>{
	e.preventDefault();
	this.setState({cancel:false})
}

handleSubmit(e) {
  e.preventDefault();
   const { title, text } = this.state;
   const {date} = this.props;
   this.props.createPost({ title, text, date });
   this.setState({ title: '', text:'' }, ()=> this.confirmClose());
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
            <form onSubmit={(e)=>this.handleSubmit(e)}>
      				<TextField
      				  id="newPost-title"
      				  label="Title"
      				  value={this.state.title}
      				  onChange={this.handleTitleChange}
      				  margin="normal"
      				  variant="outlined"
      				  fullWidth={true}
      				  required
      				  autoFocus
      				  autoComplete='off'
      				/>

      				<TextField
      				  id="newPost-text"
      				  label="Text"
      				  value={this.state.text}
      				  onChange={this.handleTextChange}
      				  margin="normal"
      				  variant="outlined"
      				  fullWidth={true}
      				  required
      				  multiline
      				  rows='6'
      				/>
      				<div style={{display:'flex', justifyContent: 'center'}}>
        				<Tooltip title='Add image'>
        					<Fab color='primary' size='large'> <AddIcon /> </Fab>
        				</Tooltip>
      				</div>
              <TextField
      				  id="newPost-infoComment"
      				  label="Ваше мнение, оно ооочень важно остальным"
      				  value={this.state.infoComment}
      				  onChange={this.handleInfoCommentChange}
      				  margin="normal"
      				  variant="outlined"
      				  fullWidth={true}
      				  required
      				  multiline
      				  rows='6'
      				/>
              <DialogActions>
                <Button type='submit' variant='contained' color='primary'> Add post </Button>
                <Button variant='contained' color='secondary' onClick={this.closeModal}> Cancel </Button>
              </DialogActions>
              </form>
					</DialogContent>
			    <Dialog
    			  open={this.state.cancel}
    			  onClose={this.confirmClose}
    			  disableBackdropClick={true}
    			 >
			      <DialogTitle>
			          Are u sure
			      </DialogTitle>
			      <DialogContent>
				        Do you want to exit post constructor?
			      </DialogContent>
      			<DialogActions>
        			<Tooltip title='Discard changes and exit'>
        			 <Button color='primary' onClick={this.confirmClose}>Yes</Button>
        			</Tooltip>
        			<Tooltip title='Cancel'>
        			 <Button color='secondary' onClick={this.cancelClose}>Nope</Button>
        			</Tooltip>
      			</DialogActions>
      			</Dialog>

	  </div>
    );
  }
}
const AddNewPost=connect(null, mapDispatchToProps)(AddNewPostS);
export default withStyles(styles)(AddNewPost);
