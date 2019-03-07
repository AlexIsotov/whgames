import React, { Component } from 'react';
import CardM from './CardM';
import Grid from '@material-ui/core/Grid';
import testReadMore from './testReadMore';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { posts: state.posts };
};
const GridSystem = ({posts}) => { return (
  posts.slice().reverse().map(el => (
    <Grid item key={el.id} zeroMinWidth>
       <CardM wrap="nowrap" readMore={el.text} title={el.title} date={el.date} />
    </Grid>
  )))
}
const GridView = connect(mapStateToProps)(GridSystem);
class GridNews extends Component {

  render() {
   return (
   	<div>
     <Grid container alignContent='center' justify='space-around' spacing={8}>
          <GridView />
  				<CardM readMore={testReadMore.infoAnthem} title={'Anthem- ????'} date={'Feb 12, 2019'} img={'https://24tv.ua/resources/photos/news/610x344_DIR/201809/1036910.jpg?201811125542'} />
  		</Grid>
   </div>
    );
  }
}

export default (GridNews);
