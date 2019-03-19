import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';
import Dialog from '@material-ui/core/Dialog';
import ModalPost from './ModalPost';
import Tooltip from '@material-ui/core/Tooltip'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {apiUrl} from '../js/constants/url'

const styles = theme => ({
  card: {
   padding: 0
  },
  media: {
   height: 250,

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
});

class CardM extends Component {

constructor(props){
	super(props);
	this.state = { expanded: false,
					like: false,
					open: false,
					anchorEl: null,
					hidden:false,
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

openCardMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
};

closeCardMenu = () => {
    this.setState({ anchorEl: null });
};

hide=()=>{
	this.setState({hidden: true,  anchorEl: null });
}
  render() {
	 const { classes } = this.props;
	 return (
   	<Card className={classes.card} hidden={this.state.hidden} key={this.props.key}>

		    <Menu
          id="menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.closeCardMenu}
        >
            <MenuItem onClick={this.hide}>
             <ClearIcon /> Hide
            </MenuItem>
			      <MenuItem >
              <CreateIcon />Edit
            </MenuItem>
        </Menu>
        <CardMedia
            className={classes.media}
            image={this.props.img? apiUrl+'/uploads/'+this.props.img : 'https://image.freepik.com/free-icon/no-translate-detected_318-41849.jpg'}
            title="img"
        />
        <CardHeader
        action={
            <Tooltip title="Actions">
              <IconButton onClick={this.openCardMenu}>
                <MoreVertIcon />
              </IconButton>
            </Tooltip>
          }
          title={this.props.title}
          subheader={this.props.date}
        />
        <CardContent>
          <Typography noWrap component="p">
           {this.props.readMore? this.props.readMore.slice() : 'Здесь пока нет описания, но оно будет! Обязательно!'}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
         <Tooltip title="Like it!">
		      <IconButton onClick={this.like} aria-label="Add to favorites">
            <FavoriteIcon color={this.state.like===true? 'primary': 'inherit'} />
          </IconButton>
		     </Tooltip>
		     <Tooltip title="Read more!">
          <IconButton onClick={this.handleOpen} aria-label="Open">
            <OpenInNewIcon />
          </IconButton>
		     </Tooltip>
		     <Tooltip title="Show admin comments">
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
		     </Tooltip>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Админ вещает:</Typography>
            <Typography paragraph>
			         {this.props.infoComment? this.props.infoComment : 'Админ нейтрален, ничего не может сказать...'}
            </Typography>
          </CardContent>
        </Collapse>
			  {this.state.open!==false &&
    			<Dialog
    			  open={this.state.open}
    			  onClose={this.handleClose}
    			  aria-labelledby="alert-dialog-title"
    			  aria-describedby="alert-dialog-description"
    			  scroll='body'
            fullWidth
            maxWidth={false}
          >
  			     <ModalPost title={this.props.title} text={this.props.readMore} close={this.handleClose} img={this.props.img}/>
  			  </Dialog>
			  }
      </Card>
    );
  }
}

export default withStyles(styles)(CardM);
