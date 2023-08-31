import styled from 'styled-components'

export const Container = styled.header`
  background:var(--blue);
  width:100%;
  //width:1440px;
  height:212px;
  
`

export const Content = styled.div`
  max-width:1120px;
  margin:0 auto;
  padding:2rem 1rem 12rem;
  display:flex;
  align-items: center;
  justify-content:space-between;

  //border:1px solid red;
  
  button{
    color:var(--shape);
    font-size:16px;
    width:195px;
    height:3rem; //48px
    background-color:var(--blue-light);
    border-radius:0.25rem; //4px
    border:none;
    padding:0 2rem;// 0 32px
    transition:filter 0.3s;
  
    &:hover{
      filter:brightness(0.9);
      
    }
  }

`