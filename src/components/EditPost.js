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
import Fab from '@material-ui/core/Fab';
import { connect } from "react-redux";
import { editPost } from "../js/actions/actions";

function mapDispatchToProps(dispatch) {
  return {
    editPost: post => dispatch(editPost(post))
  };
}
const styles = {
closeButton: {
  position: 'absolute',
	right:0,
	top:0,
	},
}

class EditThisPost extends Component {
  constructor(props){
  	super(props);
  	this.state={
  		title:'',
  		text:'',
      infoComment:'',
  		confirm: false,
  		cancel: false,
      files:{},
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

handleFilesChange=(e)=>{
    this.setState({files : e.target.files});
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
  const { title, text, infoComment } = this.state;
   const {date} = this.props;
   this.props.editPost({ title, text, date, infoComment });
   this.setState({ title: '', text:'', infoComment:'', }, ()=> this.confirmClose());
 }

 componentDidMount(){
   this.setState({title: this.props.title, text:this.props.text, infoComment: this.props.infoComment})
 }
  render() {
	  return (
   	<div>
          <DialogTitle>
			       Edit post
			       <IconButton aria-label="Close" className={this.props.classes.closeButton} onClick={this.closeModal}>
				       <CloseIcon />
			       </IconButton>
		      </DialogTitle>
          <DialogContent>
            <form onSubmit={(e)=>this.handleSubmit(e)}>
      				<TextField
      				  id="Post-title"
      				  label="Title"
      				  defaultValue={this.props.title}
      				  onChange={this.handleTitleChange}
      				  margin="normal"
      				  variant="outlined"
      				  fullWidth={true}
      				  required
      				  autoFocus
      				  autoComplete='off'
      				/>
      				<TextField
      				  id="Post-text"
      				  label="Text"
      				  defaultValue={this.props.text}
      				  onChange={this.handleTextChange}
      				  margin="normal"
      				  variant="outlined"
      				  fullWidth={true}
      				  required
      				  multiline
      				  rows='6'
      				/>
      				<TextField
      				  id="Post-infoComment"
      				  label="Ваше мнение, оно ооочень важно остальным"
      				  defaultValue={this.props.infoComment}
      				  onChange={this.handleInfoCommentChange}
      				  margin="normal"
      				  variant="outlined"
      				  fullWidth={true}
      				  multiline
      				  rows='5'
      				/>
              <DialogActions>
                <Button type='submit' variant='contained' color='primary'> Save </Button>
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
			          Are you sure?
			      </DialogTitle>
			      <DialogContent>
				        Do you want to exit post constructor?
			      </DialogContent>
      			<DialogActions>
        			<Tooltip title='Discard changes and exit'>
        			 <Button color='primary' onClick={this.confirmClose}>Yes!</Button>
        			</Tooltip>
        			<Tooltip title='Cancel'>
        			 <Button color='secondary' onClick={this.cancelClose}>Nope!</Button>
        			</Tooltip>
      			</DialogActions>
      			</Dialog>

	  </div>
    );
  }
}
const EditPost=connect(null, mapDispatchToProps)(EditThisPost);
export default withStyles(styles)(EditPost);
