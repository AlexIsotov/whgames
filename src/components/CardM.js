import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Dialog from '@material-ui/core/Dialog';
import ModalPost from './ModalPost';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class CardM extends Component {

constructor(props){
	super(props);
	this.state = { expanded: false,
					like: false,
					open: false,
					}
}


handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  
like=()=>{
	this.setState({like: !this.state.like})
}; 

handleOpen = () => {
     this.setState({ open: true });
  };

handleClose = () => {
    this.setState({ open: false });
  };
  
  render() {
	  const { classes } = this.props;
	 return (
   	<Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              A
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.title}
          subheader={this.props.date}
        />
        <CardMedia
          className={classes.media}
          image={this.props.img}
          title="img"
        />
        <CardContent>
          <Typography component="p">
           {this.props.readMore? this.props.readMore.slice(0,50)+'...' : 'Здесь пока нет описания, но оно будет! Обязательно!'} 
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton onClick={this.like} aria-label="Add to favorites">
            <FavoriteIcon color={this.state.like===true? 'primary': 'inherit'} />
          </IconButton>
          <IconButton onClick={this.handleOpen} aria-label="Open">
            <OpenInNewIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Info:</Typography>
            <Typography paragraph>
			Очень полезное описание с остроумными комментариями!!!
            </Typography>
          </CardContent>
        </Collapse>
		
		 <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <ModalPost title={this.props.title} text={this.props.readMore}/>
         </Dialog>
		
      </Card>

    );
  }
}

export default withStyles(styles)(CardM);
