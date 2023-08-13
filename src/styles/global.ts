import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root{
    --backgound:--#f0f2f5;
    --red:#e52E4D;
    --blue:#5429CC;
    --green:#33CC95;

    --blue-light:#6933FF;

    --text-title:#363F5F;
    --text-body:#969CB3;

    --shape:#FFFFFF;

  }
    *{
    margin:0;
      padding:0;
      box-sizing: border-box;
    }
  
    html{
      @media(min-width:1080px){
        font-size:93.75%;
      }
      @media(min-width:720px){
        font-size:87.5%;
      }

    }
    
  

  body,input,textarea,button{
      font-family: 'Poppins', sans-serif;
      font-weight:400;
    }
    h1,h2,h3,h3,h5,h6,strong{
      font-weight:600;

  }

  body{
    background:var(--backgound);
    -webkit-font-smoothing:antialiased;

  }
button{
  cursor:pointer;
}

[disabled]{
  opacity:0.6;
  cursor:not-allowed;
}


`
