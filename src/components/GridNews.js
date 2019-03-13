import React, { Component } from 'react';
import CardM from './CardM';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { posts: state.posts };
};
const GridSystem = ({posts}) => { return (
  posts.length>0 && posts.slice().reverse().map(el => (
    <div key={el.id}>
      <Grid item zeroMinWidth>
         <CardM wrap="nowrap" readMore={el.text} title={el.title} date={el.date} img={el.file}/>
      </Grid>
    </div>
  )))
}
const GridView = connect(mapStateToProps)(GridSystem);
class GridNews extends Component {

  render() {
   return (
   	<div>
     <Grid container alignContent='center' justify='space-around' spacing={8}>
          <GridView />
  	 </Grid>
   </div>
    );
  }
}

export default (GridNews);
