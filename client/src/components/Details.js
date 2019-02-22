import React, { Component } from 'react';
import { GameConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <GameConsumer>
        {value => {
          const { id, title, img, price, company, info, inCollection } =
            value.detailGame;

          return (
            <div className="container py-5">
              {/* title */}
              <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                <h1>{title}</h1>
              </div>

               {/* end title */ }
               
               {/* game img */ }

              <div className='row'>
                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                  <img src={img} className='img-fluid' alt='game'></img>
                </div>

                {/* game info */}

                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                  <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                    Developer: <span className='text-uppercase
                  '>{company}</span>
                  </h4>
                    <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                      Descripton:
                    </p>
                    <p className='text-muted lead'>{info}</p>
                    <h4 className='text-blue'>
                    <strong>
                      Price: <span>$</span>{price}
                      </strong>
                    </h4>
                    <div>
                      <Link to='/'>
                        <ButtonContainer>back to games</ButtonContainer>
                      </Link>
                      <ButtonContainer 
                      collection
                      disabled={inCollection?true:false}
                      onClick={() => {
                        value.addToCollection(id);
                      }}>
                      add to collecion
                      </ButtonContainer>
                    </div>
                </div>
              </div>
            </div>


          )
        }}
      </GameConsumer>
    )
  }
}
