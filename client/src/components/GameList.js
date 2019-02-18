import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Game from './Game';


import {ProductConsumer, ProductProvider} from '../context';

export default class ProductList extends Component {

  render() {

    // console.log(this.state.products)

    return (
      <React.Fragment>
          <Paper className='paper'>
            <Grid container spacing={16}>
              <Grid item>
                <ButtonBase className='btn'>
                  <img className='img' alt="complex" src="/static/images/grid/complex.jpg" />
                </ButtonBase>
              </Grid>
                <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={16}>

                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Standard license
                    </Typography>

                    <Typography gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>

                    <Typography color="textSecondary">
                      ID: 1030114
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography style={{ cursor: 'pointer' }}>
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">$19.00</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </React.Fragment>
  )}
}
            
            
            
    //         <div className='row'>
    //         <ProductConsumer>

    //           {/* this value comes from context.js. ProductConsumer returns value, callback function in value to map through data array */}

    //           {(value)=>{
    //             return value.products.map( product => {
    //               return <Product key={product.id} product={product} />;
    //             })
    //           }}
    //         </ProductConsumer>
    //         </div>;
    //       </div>;
    //   </React.Fragment>
    // )


