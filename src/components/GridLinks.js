import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

class GridLinks extends Component {

  render() {
	 return (
   	<div>
     <Grid container alignContent={'center'} justify={'space-around'} spacing={8}>
  		 <Grid item >
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
		 </Grid>
    </div>
    );
  }
}

export default GridLinks;
