import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import GridNews from './GridNews';
import GridStreams from './GridStreams';
import GridLinks from './GridLinks';
import TabBar from './TabBar';
import Tooltip from '@material-ui/core/Tooltip'
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Menu from './Menu';
import Dialog from '@material-ui/core/Dialog';
import AddNewPost from './AddNewPost';
import LoginBox from './login/LoginBox';

const drawerWidth = 340;

const styles = {
  root: {
    flexGrow: 1,
	flex: '1 0 auto',
  },
  grow: {
    flexGrow: 1,
  },
  bar: {
	backgroundColor: '#fff176',  
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
	backgroundColor: '#eeeeee'
  },
   drawerHeader: {
    display: 'flex',
    justifyContent: 'space-between',
	padding: 5,
  },
};

class AppBarM extends Component {

state = {
    value: 0,
	openDrawer: false,
	addNewPost: false,
	loginBox: false,
  };
  
handleClick = () => {
   this.setState({ openDrawer: !this.state.openDrawer });
  };

handleDrawerClose = () => {
    this.setState({ openDrawer: false });
  };
  
getScreen=(val)=>{
	this.setState({value:val})
}; 

addNewPost=()=>{
	this.setState({addNewPost:true})
}
handleClose = () => {
    this.setState({ addNewPost: false });
  };
login=()=>{
	this.setState({loginBox: true, openDrawer: this.state.openDrawer===true && false })
}
loginBoxClose=()=>{
	this.setState({loginBox:false})
}
  render() {
	  const { classes } = this.props;
	  const { value  } = this.state;

   return (
   	<div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <IconButton aria-haspopup="true"
				onClick={this.handleClick} 
				className={classes.menuButton}
				color="default"
				aria-label="Menu">
            <MenuIcon/>
          </IconButton>
		  
		 <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={this.state.openDrawer}
		  classes={{
            paper: classes.drawerPaper,
          }}
			>
			<div className={classes.drawerHeader}>
				<Typography variant='h4'> Settings </Typography>
				<IconButton onClick={this.handleDrawerClose}>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<Menu signIn={this.login} />
		</Drawer>
		 
          <Typography variant="h6" color="default" className={classes.grow}>
            WH-GAMES !
          </Typography>
		  <Button color="default" onClick={this.login}>Login</Button>
		  <Tooltip title="Add new post">
		  <IconButton color='primary' onClick={this.addNewPost}>
			<AddCircleIcon />
		  </IconButton>
		  </Tooltip>
        </Toolbar>
		<TabBar val={this.getScreen} />
	 </AppBar>
	    <br/>
	    {value === 0 && <GridNews/>}
        {value === 1 && <GridStreams/>}
        {value === 2 && <GridLinks/>}
		
		{this.state.open!==false && 
			<Dialog
			  open={this.state.addNewPost}
			  onClose={this.handleClose}
			  aria-labelledby="alert-dialog-title"
			  aria-describedby="alert-dialog-description"
			  scroll='body'
			   disableBackdropClick='true'
			>
			  <AddNewPost close={this.handleClose}/>
			</Dialog>
			}
			{this.state.loginBox===true && <LoginBox closeLoginBox={this.loginBoxClose}/>}
		
    </div>

    );
  }
}

export default withStyles(styles)(AppBarM);
