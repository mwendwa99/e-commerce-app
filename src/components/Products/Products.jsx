import React from 'react';
import { Grid } from '@material-ui/core';

import Item from './Item/Item';
import useStyle from './styles';

const Products = ({ products }) => {

    const classes = useStyle();

    return (
        <main className={classes.content} >
            {/* material ui grid*/}
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((items) => (
                    <Grid item key={items.id} xs={12} s={6} md={4} l={3} >
                        <Item item={items} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )

}

export default Products;
