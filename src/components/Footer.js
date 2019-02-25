import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({

  footer: {
	flex:'0 0 auto',
    backgroundColor: '#fff176',
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
  links: {
	  
  }

});

class Footer extends Component {

  render() {
	  const { classes } = this.props;
	 return (
   	<footer className={classes.footer}>
		<Grid container alignContent={'center'} justify={'space-around'}>
		 <Link color='error' href={"https://wh-games.space"} >
			WH-GAMES
		  </Link>
		  <Link  color='error'  href={'https://www.twitch.tv/'} >
			Twitch
		  </Link>
		  <Link  color='error'  href={'https://www.origin.com/'} >
			Origin
		  </Link>
		  <Link  color='error'  href={'https://www.google.com'} >
			Google
		  </Link>
		 </Grid> 
        <Typography variant="h6" align="center" gutterBottom>
          WH-GAMES &#169;
        </Typography>
        <Typography  variant="subtitle1" align="center" component="p">
          All rights reserved. 2019
        </Typography>
    </footer>

    );
  }
}

export default withStyles(styles)(Footer);
