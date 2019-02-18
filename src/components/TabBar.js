import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GridNews from './GridNews';
import GridStreams from './GridStreams';
import GridLinks from './GridLinks';



class TabBar extends Component {

state = {
	value: 0,
  };
  

  
handleChange = (event, value) => {
    this.setState({ value }, ()=>{this.props.val(this.state.value)});
  };
  
  render() {
	  const { classes } = this.props;
	  const { anchorEl, value  } = this.state;

   return (
   	<div>
      	<Tabs textColor="default" value={value} onChange={this.handleChange}>
            <Tab label="News"  />
            <Tab label="Streams" />
            <Tab label="Links" />
        </Tabs>
    </div>

    );
  }
}

export default (TabBar);
