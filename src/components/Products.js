import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { indigo, deepOrange, grey, green } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
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
    avatarMC: {
        backgroundColor: indigo[300],
    },
    avatarWC: {
        backgroundColor: deepOrange[300],
    },
    avatarJW: {
        backgroundColor: grey[400],
    },
    avatarEL: {
        backgroundColor: green[400],
    }
}));

function Products() {
    const classes = useStyles();

    const [products, setProducts] = useState();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    console.log(products);

    return (
        <div>
            {products && products.map(el => (
                <Card className={classes.root} key={el.id}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="category" className={
                                el.category === 'men clothing' ? classes.avatarMC :
                                    el.category === 'women clothing' ? classes.avatarWC :
                                        el.category === 'jewelery' ? classes.avatarJW :
                                            el.category === 'electronics' ? classes.avatarEL : null
                            }>
                                <DonutSmallIcon />
                            </Avatar>
                        }
                        title={el.title}
                        subheader={el.category}
                    />
                    <CardMedia
                        className={classes.media}
                        image={el.image}
                        title={el.title}
                    />
                    <CardContent>
                        <Typography variant="h6" color="textSecondary" component="p" size="big">
                            £ {el.price}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Button variant="contained" color="primary" size="small">
                            + add to basket
                        </Button>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="more info"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {el.description}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            ))}
        </div>
    )
}

export default Products;
