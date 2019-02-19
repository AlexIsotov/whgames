import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import GridNews from './GridNews';
import GridStreams from './GridStreams';
import GridLinks from './GridLinks';
import TabBar from './TabBar';
import Tooltip from '@material-ui/core/Tooltip'
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const drawerWidth = 340;

const styles = {
  root: {
    flexGrow: 1,
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
    justifyContent: 'flex-end',
  },
};

class AppBarM extends Component {

state = {
    value: 0,
	openDrawer: false,
  };
  
handleClick = () => {
   this.setState({ openDrawer: !this.state.openDrawer });
  };

handleDrawerClose = () => {
    this.setState({ openDrawer: false });
  };
  
handleChange = (event, value) => {
    this.setState({ value });
  };
  
getScreen=(val)=>{
	this.setState({value:val})
}; 
  render() {
	  const { classes } = this.props;
	  const { anchorEl, value  } = this.state;

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
				<IconButton onClick={this.handleDrawerClose}>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<MenuItem >Profile</MenuItem>
			<MenuItem >My account</MenuItem>
			<MenuItem >Logout</MenuItem>
		</Drawer>
		 
          <Typography variant="h6" color="default" className={classes.grow}>
            WH-GAMES !
          </Typography>
		  <Button color="default">Login</Button>
		  <Tooltip title="Add new post">
		  <IconButton color='primary'>
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
    </div>

    );
  }
}

export default withStyles(styles)(AppBarM);
