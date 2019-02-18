import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GridNews from './GridNews';
import GridStreams from './GridStreams';
import GridLinks from './GridLinks';

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
};

class AppBarM extends Component {

state = {
    anchorEl: null,
	value: 0,
  };
  
handleClick = event => {
   this.setState({ anchorEl: event.currentTarget });
  };
  
handleClose = () => {
    this.setState({ anchorEl: null });
  }; 
  
handleChange = (event, value) => {
    this.setState({ value });
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
		  <Menu
				  id="simple-menu"
				  anchorEl={anchorEl}
				  open={Boolean(anchorEl)}
				  onClose={this.handleClose}
				>
				  <MenuItem >Profile</MenuItem>
				  <MenuItem >My account</MenuItem>
				  <MenuItem >Logout</MenuItem>
				</Menu>
          <Typography variant="h6" color="default" className={classes.grow}>
            WH-GAMES !
          </Typography>
          <Button color="default">Login</Button>
        </Toolbar>
		<Tabs textColor="default" value={value} onChange={this.handleChange}>
            <Tab label="News"  />
            <Tab label="Streams" />
            <Tab label="Links" />
        </Tabs>
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
