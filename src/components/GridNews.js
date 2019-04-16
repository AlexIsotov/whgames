import React, { Component } from 'react';
import CardM from './CardM';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { posts: state.posts };
};

class GridNews extends Component {
  constructor(props){
    super(props);
    this.state={
      cols:4
    }
  }
  componentDidMount(){
    if(document.documentElement.clientWidth<400){
      this.setState({cols:1})
    }
    else {this.setState({cols:4})}
  }
  render() {
   const { posts } = this.props;
   return (
   	<div >
     <GridList cellHeight='auto' cols={this.state.cols} spacing={6}>
       {posts.length>0 && posts.slice().reverse().map(el => (
           <GridListTile key={el.id} cols={el.title.length>15 && this.state.cols===4?2:1} rows={1}>
              <CardM readMore={el.text} title={el.title} date={el.date} img={el.file} infoComment={el.infoComment}/>
           </GridListTile>
        ))
       }
  	 </GridList>
   </div>
    );
  }
}

export default connect(mapStateToProps)(GridNews);
