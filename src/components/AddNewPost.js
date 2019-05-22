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
   const formData = new FormData();
   for(let i=0; i<this.state.files.length; i++){
     let file = this.state.files[i];
     formData.append('files[]', file);
   };
   this.props.createPost({ title, text, date, formData, infoComment });
   this.setState({ title: '', text:'', infoComment:'', files:{} }, ()=> this.confirmClose());
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
              <Tooltip title="Just short title for your story">
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
              </Tooltip>
              <Tooltip title="Short text :)">
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
              </Tooltip>
      				<div style={{display:'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column'}}>
                <input
                accept="image/*"
                id="button-file"
                multiple
                type="file"
                style={{display:'none'}}
                onChange={this.handleFilesChange}
                />
                <label htmlFor="button-file">
                  <Tooltip title='Add image'>
                    <Fab component='span' color='primary' size='large'>
                      <AddIcon />
                    </Fab>
                  </Tooltip>
                </label>
                <p style={{color: 'gray'}}><small>{this.state.files.length>0 && 'Selected ' + this.state.files.length + ' image(s)'}</small></p>
      				</div>
              <Tooltip title="Your own opinion about this post">
              <TextField
      				  id="newPost-infoComment"
      				  label="Ваше мнение, оно ооочень важно остальным"
      				  value={this.state.infoComment}
      				  onChange={this.handleInfoCommentChange}
      				  margin="normal"
      				  variant="outlined"
      				  fullWidth={true}
      				  multiline
      				  rows='5'
      				/>
              </Tooltip>
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
			          Are u sure?
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
