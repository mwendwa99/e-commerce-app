import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
// import classes from '*.module.css';

import useStyles from './styles';

const Item = ({ item }) => {

    const classes = useStyles();

    console.log(item);

    return (
        <Card className={classes.root} >
            <CardMedia className={classes.media} image={item.media.source} title={item.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    {/* texts within the cards */}
                    <Typography variant="h5" gutterBottom >
                        {item.name}
                    </Typography>
                    <Typography variant="h5">
                        {item.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: item.description }} variant="body2" color="textSecondary" />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions} >
                <IconButton aria-label="Add to Cart" >
                    <AddShoppingCart />
                </IconButton>
            </CardActions>

        </Card>
    )
}

export default Item;
