import styled from 'styled-components';



export const ButttonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    color: var(--lightBlue);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5 ease;
  &:hover{
      bacground: var(--lightBlue);
      color: var(--mainBlue);
  }
  &:focus{
      outline: none;
  } 
`