import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GameConsumer } from '../context';
import PropTypes from 'prop-types';

export default class Game extends Component {
  render() {
    const { id, title, img, price, inCollection } = this.props.game;
    return (
      <GameWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
        <div className='card'>

          <GameConsumer>
            {(value) => (
            <div 
              className='img-container p-5' 
              onClick={() => 
              value.handleDetail(id)}
            >

              <Link to='/details'>
                <img src={img} alt='game' 
                className='card-img-top' />
              </Link>
              <button
                className='coll-btn'
                disabled={inCollection ? true : false}
                onClick={() => {
                  value.addToCollection(id);
                  value.openModal(id)
                }}
              >
                {inCollection ? (
                  <p className='text-capitalize mb-0' disabled>
                    {" "}
                    in Collection
                </p>
                ) : (
                  <i className="fas fa-folder-plus"/>)}
              </button>
            </div>
            )}
          </GameConsumer>
          {/* card footer */}
          <div className='card-footer d-flex justify-content-between'>
            <p className='align-self-center mb-0'>
              {title}
            </p>
            <h5 className='text-blue font-italic mb-0'>
              <span className='mr-1'>$</span>
              {price}
            </h5>
          </div>
        </div>
      </GameWrapper>
    )
  }
}

Game.propTypes = {
  game:PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title:PropTypes.string,
    price: PropTypes.number,
    inCollection: PropTypes.boolean
  }).isRequired
}

const GameWrapper = styled.div`
  .card{
    border-color:transparent;
    transition:all 1s linear;
    margin: 1rem
  }
  .card-footer{
    background:transparent;
    border-top: transparent;
    transition:all 1s linear;
    overflow: hidden;
  }
  &:hover{
    .card{
      border:0.04rem solid rgba(0,0,0,0.2);
      box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2)
    }
    .card-footer{
      background:rgba (247, 247, 247);
    }
  }
  .img-container{
    position:relative;
    overflow: hidden;
  }
  .card-img-top{
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top
    transform:scale(1.2); 
  }
  .coll-btn{
    position: absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:var(--lightBlue);
    border:none;
    color:var(--mainWhite);
    font-size:1.4rem
    border-radius:0.5rem 0 0 0;
    transform:translate(100%, 100%); 
  }
  .img-container:hover .coll-btn{
    transform:translate(0, 0);
    transition: all 1s linear;
  }
  .coll-btn:hover{
    color:var(--mainBlue);
    cursor: pointer
  }
`
