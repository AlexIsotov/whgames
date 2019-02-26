import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Divider from '@material-ui/core/Divider';

class Menu extends Component {

  render() {
   return (
   	<div>
 		 <List>
			  <Divider />
			  {this.props.login!==true?
				<ListItem button onClick={this.props.signIn}>
					<ListItemIcon><PowerSettingsNewIcon /></ListItemIcon>
					<ListItemText primary='Sign in'/>
				</ListItem>:
				<div>
					  <ListItem button>
						<ListItemIcon><CardTravelIcon /></ListItemIcon>
						<ListItemText primary='Profile'/>
					  </ListItem>
					  <Divider />
					  <ListItem button>
						<ListItemIcon><AccountCircleIcon /></ListItemIcon>
						<ListItemText primary='My account'/>
					  </ListItem>
					  <Divider />
					  <ListItem button>
						<ListItemIcon><PowerSettingsNewIcon /></ListItemIcon>
						<ListItemText primary='Logout'/>
					  </ListItem>
				</div>
				}
        <Divider />
      </List>
    </div>
    );
  }
}

export default Menu;
