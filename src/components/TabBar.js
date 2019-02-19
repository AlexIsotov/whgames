import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class TabBar extends Component {

state = {
	value: 0,
  };
  

  
handleChange = (event, value) => {
    this.setState({ value }, ()=>{this.props.val(this.state.value)});
  };
  
  render() {
	  const { value  } = this.state;

   return (
   	<div>
      	<Tabs textColor="secondary" value={value} onChange={this.handleChange}>
            <Tab label="News"  />
            <Tab label="Streams" />
            <Tab label="Links" />
        </Tabs>
    </div>

    );
  }
}

export default (TabBar);
