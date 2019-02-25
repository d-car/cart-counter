import React, { Component } from 'react';
import styled from 'styled-components';
import { GameConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <GameConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, company } = value.modalGame;

                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            < ModalContainer >
                                <div className="container">
                                    <div className="row">
                                        <div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'>
                                            <h4>game added to collection</h4>
                                            <img src={img} className='img-fluid' alt='product' />
                                            <h4>{title}</h4>
                                            <h5>{company}</h5>
                                            <Link to='/'>
                                            <ButtonContainer onClick={() => {
                                                closeModal()
                                            }}>
                                                Continue Search
                                            </ButtonContainer>
                                            </Link>
                                            <Link to='/collection'>
                                            <ButtonContainer onClick={() => {
                                                closeModal()
                                            }}>
                                                Collection
                                            </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </GameConsumer>
        )
    }
}

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
#modal {
    background: var(--mainWhite);
}
`;
