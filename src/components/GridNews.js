import React, { Component } from 'react';
import CardM from './CardM';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { posts: state.posts };
};



class GridNews extends Component {
  render() {
   const { classes, posts } = this.props;
   return (
   	<div>
     <GridList cellHeight='auto' cols={2}>
     {posts.length>0 && posts.slice().reverse().map(el => (
         <GridListTile key={el.id} cols={1}>
            <CardM wrap="nowrap" readMore={el.text} title={el.title} date={el.date} img={el.file} infoComment={el.infoComment}/>
         </GridListTile>
      ))
     }
  	 </GridList>
   </div>
    );
  }
}

export default connect(mapStateToProps)(GridNews);
